import React from "react";
import { render, screen } from '@testing-library/react';
import AttendeeForm from "../components/AttendeeForm";
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event'

describe("<AttendeeForm />", () => {
    let user;
    let nameTextBox;
    let emailTextBox;
    let addAttendeeButton;
    let editButton;
    let deleteButton;
    
    test("should load user data into form", async () => {
        render(
            <BrowserRouter>
                <AttendeeForm />
            </BrowserRouter>
        );

        user = ({
            email: "test@email.com",
            name: "test",
        });

        emailTextBox = screen.getByRole("textbox", {
            name: /Email Address/i,
        });

        nameTextBox = screen.getByRole("textbox", {
            name: /Name/i,
        });

        await userEvent.type(emailTextBox, "test@email.com");
        await userEvent.type(nameTextBox, "test");

        expect(
            screen.getByRole("form", {
                name: /add attendees/i,
            })
        ).toHaveFormValues({
            email: user.email,
            name: user.name,
        });
    });

    test("add attendee button should be disabled without data in fields", async () => {
        render(
            <BrowserRouter>
                <AttendeeForm />
            </BrowserRouter>
        );

        addAttendeeButton = screen.getByRole('button', { name: /add/i });

        expect(addAttendeeButton).toHaveAttribute('disabled');
    });

    test("should load user data into form and add attendee to list", async () => {
        render(
            <BrowserRouter>
                <AttendeeForm />
            </BrowserRouter>
        );

        user = ({
            email: "test@email.com",
            name: "test",
        });

        emailTextBox = screen.getByRole("textbox", {
            name: /Email Address/i,
        });

        nameTextBox = screen.getByRole("textbox", {
            name: /Name/i,
        });

        addAttendeeButton = screen.getByRole('button', { name: /add/i });

        await userEvent.type(emailTextBox, "test@email.com");
        await userEvent.type(nameTextBox, "test");
        await userEvent.click(addAttendeeButton)

        expect(
            screen.getByRole("form", {
                name: /add attendees/i,
            })
        ).toHaveFormValues({
            email: "",
            name: "",
        });

        const attendeeName = screen.getByText(/test/i);
        expect(attendeeName).toBeInTheDocument();

        const attendeeEmail = screen.getByText(/test@email.com/i);
        expect(attendeeEmail).toBeInTheDocument();

        expect(screen.getByLabelText('edit-icon')).toBeInTheDocument;
        expect(screen.getByLabelText('delete-icon')).toBeInTheDocument;
    });

    test("should click edit and load user data into form", async () => {
        render(
            <BrowserRouter>
                <AttendeeForm />
            </BrowserRouter>
        );

        user = ({
            email: "test@email.com",
            name: "test",
        });

        emailTextBox = screen.getByRole("textbox", {
            name: /Email Address/i,
        });

        nameTextBox = screen.getByRole("textbox", {
            name: /Name/i,
        });

        addAttendeeButton = screen.getByRole('button', { name: /add/i });
        
        await userEvent.type(emailTextBox, "test@email.com");
        await userEvent.type(nameTextBox, "test");
        await userEvent.click(addAttendeeButton)

        editButton = screen.getByLabelText('edit-icon');
        await userEvent.click(editButton)

        expect(
            screen.getByRole("form", {
                name: /add attendees/i,
            })
        ).toHaveFormValues({
            email: user.email,
            name: user.name,
        });
    });

    test("should click delete and delete user from list", async () => {
        render(
            <BrowserRouter>
                <AttendeeForm />
            </BrowserRouter>
        );

        user = ({
            email: "test@email.com",
            name: "test",
        });

        emailTextBox = screen.getByRole("textbox", {
            name: /Email Address/i,
        });

        nameTextBox = screen.getByRole("textbox", {
            name: /Name/i,
        });

        addAttendeeButton = screen.getByRole('button', { name: /add/i });
        
        await userEvent.type(emailTextBox, "test@email.com");
        await userEvent.type(nameTextBox, "test");
        await userEvent.click(addAttendeeButton)

        deleteButton = screen.getByLabelText('delete-icon');
        await userEvent.click(deleteButton)

        const attendeeName = screen.queryByText(/test/i);
        expect(attendeeName).toBeNull;

        const attendeeEmail = screen.queryByText(/test@email.com/i);
        expect(attendeeEmail).toBeNull;
    });

    test("should hover over edit icon and see tooltip", async () => {
        render(
            <BrowserRouter>
                <AttendeeForm />
            </BrowserRouter>
        );

        user = ({
            email: "test@email.com",
            name: "test",
        });

        emailTextBox = screen.getByRole("textbox", {
            name: /Email Address/i,
        });

        nameTextBox = screen.getByRole("textbox", {
            name: /Name/i,
        });

        addAttendeeButton = screen.getByRole('button', { name: /add/i });
        
        await userEvent.type(emailTextBox, "test@email.com");
        await userEvent.type(nameTextBox, "test");
        await userEvent.click(addAttendeeButton)

        editButton = screen.getByLabelText('edit-icon');
        await userEvent.hover(editButton)

        const editToolTip = screen.queryByText(/Edit/i);
        expect(editToolTip).toBeNull;
    });

    test("should hover over delete icon and see tooltip", async () => {
        render(
            <BrowserRouter>
                <AttendeeForm />
            </BrowserRouter>
        );

        user = ({
            email: "test@email.com",
            name: "test",
        });

        emailTextBox = screen.getByRole("textbox", {
            name: /Email Address/i,
        });

        nameTextBox = screen.getByRole("textbox", {
            name: /Name/i,
        });

        addAttendeeButton = screen.getByRole('button', { name: /add/i });
        
        await userEvent.type(emailTextBox, "test@email.com");
        await userEvent.type(nameTextBox, "test");
        await userEvent.click(addAttendeeButton)

        deleteButton = screen.getByLabelText('delete-icon');
        await userEvent.hover(deleteButton)

        const deleteToolTip = screen.queryByText(/Delete/i);
        expect(deleteToolTip).toBeNull;
    });
});
