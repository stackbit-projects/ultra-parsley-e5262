export default {
    "type": "object",
    "name": "section_docs",
    "title": "Documentation Overview Section",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title of the section.",
            "validation": null
        },
        {
            "type": "string",
            "name": "section_id",
            "title": "Section ID",
            "description": "A unique identifier of the section, must not contain whitespace",
            "validation": null
        },
        {
            "type": "string",
            "name": "subtitle",
            "title": "Subtitle",
            "description": "The subtitle of the section",
            "validation": null
        },
        {
            "type": "string",
            "name": "col_number",
            "title": "Columns",
            "description": "The number of documentation sections in a row",
            "initialValue": "three",
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "two",
                    "three"
                ]
            }
        },
        {
            "type": "string",
            "name": "type",
            "title": "Object Type",
            "description": "The type of the object",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "section_docs"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "object"
                ]
            }
        }
    ],
    "preview": {
        "select": {
            "title": "title"
        }
    }
}