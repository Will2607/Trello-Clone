"use client";

import { forwardRef } from "react";

interface CardFormProps {
    listId: string;
    enableEditing: () => void;
    disableEditing: () => void;
    isEditing: boolean;
};

export const CardForm = forwardRef<HTMLTextAreaElement, CardFormProps>(({
    listId,
    enableEditing,
    disableEditing,
    isEditing,
}) => {
    return (
        <div>
            Card Form
        </div>
    );
});

CardForm.displayName = "CardForm";