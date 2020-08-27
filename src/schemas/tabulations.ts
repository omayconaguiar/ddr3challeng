const tabulationsSchema =

{
    "title": "tabulationsSchema",
    "type": "object",
    "properties": {
        "nomeCliente": {
            "type": "string"
        },
        "protocolo": {
            "type": "string"
        },
        "dataAtendimento": {
            "type": "string",
        },
        "numeroBinado": {
            "type": "string",
        },
        "numeroAcesso": {
            "type": "string",
        }
    },
    "required": ["nomeCliente", "protocolo", "dataAtendimento", "numeroBinado", "numeroAcesso"]
}

export default [
    {
        name: "tabulationsSchema",
        schema: tabulationsSchema
    }
]