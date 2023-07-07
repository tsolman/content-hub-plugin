import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useFormFields } from 'payload/components/forms';

type Props = { text: string }

const MarkdownPreview: React.FC<Props> = ({ text }) => {
    const mdText = useFormFields(([fields, dispatch]) => fields.articleText);

    if (typeof mdText?.value !== 'undefined' || mdText.value !== null) {
        return (
            <ReactMarkdown children={mdText?.value?.toString() || text} />
        )
    }
    return null;
}

export default MarkdownPreview;