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
    const sessionUrl = 'https://chewsy-session.azurewebsites.net';
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

        mock.onGet(`${sessionUrl}/sessions/${session}/status`).reply(200,"CREATED");
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

    test("should click yes and api endpoint should not be called", async () => {

        mock.onGet(`${sessionUrl}/sessions/${session}/status`).reply(200,"COMPLETED");
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

        expect(mock.history.post[0].url).toBeNull;
    })

    test("should click no and api endpoint should be called", async () => {

        mock.onGet(`${sessionUrl}/sessions/${session}/status`).reply(200,"CREATED");
        mock.onPost(`${url}/vote/${session}/remove`, {"session":"1","email":"test@email.com","restaurant":"test"}).reply(200);

        render(
            <MemoryRouter initialEntries={[
                '/',
                {
                    pathname: `/restaurant/${session}`,
                    state: {
                        index: session,
                        vote: false,
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

        const noButton = screen.getByRole('button', { name: /no/i });

        expect(noButton).toBeInTheDocument;

        await userEvent.click(noButton);

        expect(mock.history.post[0].url).toEqual(`${url}/vote/${session}/remove`);
    })
})