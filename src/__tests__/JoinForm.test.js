import React from "react";
import { render, screen } from '@testing-library/react';
import JoinForm from "../components/JoinForm";
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event'

describe("<JoinForm />", () => {
    let group;
    let emailTextBox;
    let sessionTextBox;
    let joinGroupButton;
    let backButton;
    
    test("should load group data into form", async () => {
        render(
            <BrowserRouter>
                <JoinForm />
            </BrowserRouter>
        );

        group = ({
            email: "test@email.com",
            session: "5",
        });

        emailTextBox = screen.getByRole("textbox", {
            name: /Email Address/i,
        });

        sessionTextBox = screen.getByRole("textbox", {
            name: /Session/i,
        });

        await userEvent.type(emailTextBox, "test@email.com");
        await userEvent.type(sessionTextBox, "5");

        expect(
            screen.getByRole("form", {
                name: /join a group/i,
            })
        ).toHaveFormValues({
            email: group.email,
            session: group.session,
        });
    });

    test("join group button should render", async () => {
        render(
            <BrowserRouter>
                <JoinForm />
            </BrowserRouter>
        );

        joinGroupButton = screen.getByRole('button', { name: /join/i });

        expect(joinGroupButton).toBeInTheDocument;
    });

    test("back button should render", async () => {
        render(
            <BrowserRouter>
                <JoinForm />
            </BrowserRouter>
        );

        backButton = screen.getByRole('button', { name: /back/i });

        expect(backButton).toBeInTheDocument;
    });

    test("text boxes should render", async () => {
        render(
            <BrowserRouter>
                <JoinForm />
            </BrowserRouter>
        );

        emailTextBox = screen.getByRole("textbox", {
            name: /Email Address/i,
        });

        sessionTextBox = screen.getByRole("textbox", {
            name: /Session/i,
        });

        expect(emailTextBox).toBeInTheDocument;
        expect(sessionTextBox).toBeInTheDocument;
    });
});
