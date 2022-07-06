import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import SessionApi from "../api/SessionApi";
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe("<SessionApi />", () => {
    let mock;
    const url = 'https://chewsy-session.azurewebsites.net';
    const session = '1';
    const location = "01001";
    const radius = "5";
    const duration = "3";

    beforeAll(() => {
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        mock.reset();
    })

    describe("when API call is made, the loader is displayed", () => {
        test("should return session id", async () => {
            mock.onPost(`${url}/sessions/create_session`).reply(200, session);

            render(
                <MemoryRouter initialEntries={[
                    {
                        state: {
                            loading: true,
                            session: session,
                        },
                    }
                ]}>
                    <SessionApi location={location} radius={radius} duration={duration} />
                </MemoryRouter>
            );
            
            const loaderText = screen.getByText(/Getting the list from the Concierge/i);
            expect(loaderText).toBeInTheDocument();
        });        
    });
})