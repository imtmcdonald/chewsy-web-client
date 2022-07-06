import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import GetSessionApi from "../api/GetSessionApi";
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe("<GetSessionApi />", () => {
    let mock;
    const url = 'https://chewsy-session.azurewebsites.net';
    const session = '1';
    const restaurants = {restaurantList: "[{\"RATING\":4.4,\"ADDRESS\":\"2015 Ayrsley Town Blvd #102, Charlotte, NC 28273, United States\",\"NAME\":\"Salsa's Mexican Grille\"}]"};

    beforeAll(() => {
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        mock.reset();
    })

    describe("when API call is made, the loader is displayed", () => {
        test("should return restaurant list", async () => {
            mock.onGet(`${url}/sessions/${session}/restaurants`).reply(200, restaurants);

            render(
                <MemoryRouter initialEntries={[
                    {
                        state: {
                            loading: true,
                            restaurants: restaurants.restaurantList,
                        },
                    }
                ]}>
                    <GetSessionApi session={session} />
                </MemoryRouter>
            );
            
            const loaderText = screen.getByText(/Loading Restaurants.../i);
            expect(loaderText).toBeInTheDocument();
        });        
    });
})