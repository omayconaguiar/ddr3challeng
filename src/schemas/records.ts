const recordsSchema =

{
    "title": "recordsSchema",
    "type": "object",
    "properties": {
        "telefone": {
            "type": "string"
        },
        "ramal": {
            "type": "string"
        },
        "dataGravacao": {
            "type": "string",
        }
    },
    "required": ["telefone", "ramal", "dataGravacao"]
}


export default [
    {
        name: "recordsSchema",
        schema: recordsSchema
    }
]