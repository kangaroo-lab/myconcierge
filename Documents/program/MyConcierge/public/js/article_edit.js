import * as EditorJS from 'https://cdn.jsdelivr.net/npm/@editorjs/editorjs@latest';
import Header from "https://cdn.jsdelivr.net/npm/@editorjs/header@latest";
import List from "https://cdn.jsdelivr.net/npm/@editorjs/list@latest";
import ImageTool from "https://cdn.jsdelivr.net/npm/@editorjs/image@2.3.0";
import Table from "https://cdn.jsdelivr.net/npm/@editorjs/table@latest";
import Embed from "https://cdn.jsdelivr.net/npm/@editorjs/embed@latest";
import LinkTool from "https://cdn.jsdelivr.net/npm/@editorjs/link@latest";



const ImageTool = window.ImageTool;

const editor = new EditorJS({
    holder : 'editorjs',
    tools: {
        Header,
        list: {
            class: List,
            inlineToolbar: true
        },
        table: {
            class: Table,
            inlineToolbar: true
        },
        image: {
            class: ImageTool,
            config: {
            // endpoints: {
            //     byFile: 'localhost:9199/img', // Your backend file uploader endpoint
            //     byUrl: 'http://localhost:4000/firestore/data/test/US9M2FasA5eGH0syoRW6', // Your endpoint that provides uploading by Url
            //     }
                uploader: {
                    async uploadByFile(file){},
                }
            }
            // class: SimpleImage
        },
        embed: {
            class: Embed,
            config: {
                services: {
                    youtube: true,
                    coub: true
                }
            }
        },
        linkTool: {
            class: LinkTool,
            config: {
                endpoint: '', // Your backend endpoint for url data fetching,
            }
        },
    },
    autofocus: true
});

export {
    editor as default
}
