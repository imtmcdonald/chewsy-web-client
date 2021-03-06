import MockAdapter from "axios-mock-adapter";
import { postApi } from "../api/PostApi";
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import Restaurant from "../components/Restaurant";
import LandingPage from "../pages/LandingPage";
import userEvent from '@testing-library/user-event';

describe("<VoteApi />", () => {
    let mock;
    const url = 'https://chewsy-vote.azurewebsites.net';
    const session = '1';
    const email = 'test@email.com';
    const restaurants = {restaurantList: "[{\"RATING\":4.4,\"ADDRESS\":\"2015 Ayrsley Town Blvd #102, Charlotte, NC 28273, United States\",\"NAME\":\"test\"}]"};
    const restaurant = "test";

    beforeAll(() => {
        mock = new MockAdapter(postApi);
    });

    afterEach(() => {
        mock.reset();
    })

    test("should click yes and api endpoint should be called", async () => {

        mock.onPost(`${url}/vote/${session}/cast`, {"session":"1","email":"test@email.com","restaurant":"test"}).reply(200);

        render(
            <MemoryRouter initialEntries={[
                '/',
                {
                    pathname: `/restaurant/${session}`,
                    state: {
                        index: session,
                        vote: true,
                        restaurant: restaurant,
                        email: email,
                    },
                }
            ]}>
                <Routes>
                    <Route exact path="/" element={<LandingPage />} />
                    <Route component={props => <Restaurant {...props} />} exact path="/restaurant/:sessionId" element={<Restaurant restaurants={JSON.parse(restaurants.restaurantList)} />} />
                </Routes>
            </MemoryRouter>
        )

        const yesButton = screen.getByRole('button', { name: /yes/i });

        expect(yesButton).toBeInTheDocument;

        await userEvent.click(yesButton);

        expect(mock.history.post[0].url).toEqual(`${url}/vote/${session}/cast`);
    })
})