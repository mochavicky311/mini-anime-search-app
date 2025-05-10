import React from 'react';
import ErrorMessage from '../components/ErrorMessage';

export default function ErrorPage() {
    return (
        <ErrorMessage
            message_title="Oops!"
            message_text="The page you are looking for does not exist, or an error occurred."
            show_back_home={true}
        />
    );
};