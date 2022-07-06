import React from "react";
import { render, screen } from '@testing-library/react';
import RestaurantForm from "../components/RestaurantForm";
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event'

describe("<RestaurantForm />", () => {
    let group;
    let emailTextBox;
    let locationTextBox;
    let radiusSelector;
    let durationSelector;
    
    test("should load group data into form", async () => {
        render(
            <BrowserRouter>
                <RestaurantForm />
            </BrowserRouter>
        );

        group = ({
            email: "test@email.com",
            location: "01001",
            radius: "5",
            duration: "3",
        });

        emailTextBox = screen.getByRole("textbox", {
            name: /Email Address/i,
        });

        locationTextBox = screen.getByRole("textbox", {
            name: /Location/i,
        });

        radiusSelector = screen.getByRole("combobox", {
            name: /Radius/i,
        });

        durationSelector = screen.getByRole("combobox", {
            name: /Duration/i,
        });

        await userEvent.type(emailTextBox, "test@email.com");
        await userEvent.type(locationTextBox, "01001");
        await userEvent.selectOptions(radiusSelector, ['5']);
        await userEvent.selectOptions(durationSelector, ['3']);

        expect(
            screen.getByRole("form", {
                name: /create a group/i,
            })
        ).toHaveFormValues({
            email: group.email,
            location: group.location,
            radius: group.radius,
            duration: group.duration,
        });
    });
});
