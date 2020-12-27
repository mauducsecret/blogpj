import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";
import { Alert } from 'react-bootstrap';
import Router from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, ContentState , convertFromHTML} from "draft-js";
import dynamic from "next/dynamic";
import {stateToHTML} from 'draft-js-export-html';


const Editor = dynamic(
    () => {
        return import("react-draft-wysiwyg").then(mod => mod.Editor);
    },
    { ssr: false }
);

const htmlToDraft = dynamic(
    () => {
        return import("html-to-draftjs").then(mod => mod.Editor);
    },
    { ssr: false }
);


const Createblogform = () => {
    const [editorState, setEditorState] =  useState(EditorState.createEmpty());
    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();
    const [fileName, setFileName] = useState("Upload Boundary File");
    const loginSuccess = () =>
        dispatch({
            type: 'LOGINSUCESS',
        })
    // function to output form data
    // we need to pass it to onSubmit of form element
    const onSubmit = async (formData) => {

    }

    const onEditorStateChange = editorState => {
        /* let html = stateToHTML(editorState.getCurrentContent());
        console.log(html);
        const contentBlock = convertFromHTML(html);
        if (contentBlock) {
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
            var editorStateInitial = EditorState.createWithContent(contentState);
            setEditorState(editorState);
        } */
        setEditorState(editorState);
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)} >
            <Form.Group controlId="formBasicTitle">
                <Form.Label>Title Article</Form.Label>
                <Form.Control name="title" ref={register({ required: true, maxLength: 255 })} type="text" maxLength="255" placeholder="Title Article" />
                <Form.Text className="text-muted">
                    {errors.title &&
                        // if errors then display alert
                        <Alert variant="danger">
                            {errors.title?.type === "required" && <p>Title is required</p>}
                            {errors.title?.type === "maxLength" && <p>Max length of Title is 255 characters!</p>}
                        </Alert>
                    }
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicContent">
                <Form.Label>Image Attach</Form.Label>
                <Form.File 
                id="formcheck-api-custom"
                type="file"
                custom
                label={fileName}
                onChange={(e) => setFileName(e.target.files[0].name)}
                >
                    <Form.File.Input isValid />
                    <Form.File.Label data-browse="Browse">
                        {fileName}
                    </Form.File.Label>
                </Form.File>
            </Form.Group>
            <Form.Group controlId="formBasicContent">
                <Form.Label>Cotent</Form.Label>
                <Editor editorState={editorState}
                    wrapperClassName="rich-editor demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={onEditorStateChange}
                    placeholder="The message goes here..." />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default Createblogform;