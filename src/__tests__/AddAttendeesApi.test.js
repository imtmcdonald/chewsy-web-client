import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import AddAttendeesApi from "../api/AddAttendeesApi";
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

describe("<AddAttendeesApi />", () => {
    let mock;
    const url = "https://chewsy-session.azurewebsites.net";
    const session = "1";
    const attendees = [{ name: "test", email: "test@email.com" }];
    const email = "test@email.com";

    beforeAll(() => {
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        mock.reset();
    })

    describe("when API call is made, the loader is displayed", () => {
        test("should return 200 response", () => {
            mock.onPost(`${url}/sessions/${session}/attendees`).reply(200);
            act(() => {
                render(
                    <MemoryRouter initialEntries={[
                        {
                            state: {
                                initiator: email,
                                session: session,
                                attendees: attendees,
                            },
                        }
                    ]}>
                        <AddAttendeesApi />
                    </MemoryRouter>
                );
            });
            
            const loaderText = screen.getByText(/Inviting the attendees/i);
            expect(loaderText).toBeInTheDocument();
        });        
    });
})