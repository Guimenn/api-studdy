import { readAll, read, create, update, deleteRecord } from '../config/database.js';

// Controller genérico que pode ser usado para qualquer entidade
export const GenericController = (tableName) => {
    return {
        // Listar todos os registros
        listar: async (req, res) => {
            try {
                const registros = await readAll(tableName);
                res.status(200).json(registros);
            } catch (error) {
                console.error(`Erro ao listar ${tableName}:`, error);
                res.status(500).json({ mensagem: `Erro ao listar ${tableName}` });
            }
        },

        // Buscar por ID
        buscarPorId: async (req, res) => {
            try {
                const registro = await read(tableName, `id = ${req.params.id}`);
                if (registro) {
                    res.status(200).json(registro);
                } else {
                    res.status(404).json({ mensagem: `${tableName} não encontrado` });
                }
            } catch (error) {
                console.error(`Erro ao buscar ${tableName}:`, error);
                res.status(500).json({ mensagem: `Erro ao buscar ${tableName}` });
            }
        },

        // Criar novo registro
        criar: async (req, res) => {
            try {
                const registroId = await create(tableName, req.body);
                res.status(201).json({ 
                    mensagem: `${tableName} criado com sucesso`, 
                    id: registroId 
                });
            } catch (error) {
                console.error(`Erro ao criar ${tableName}:`, error);
                res.status(500).json({ mensagem: `Erro ao criar ${tableName}` });
            }
        },

        // Atualizar registro
        atualizar: async (req, res) => {
            try {
                await update(tableName, req.body, `id = ${req.params.id}`);
                res.status(200).json({ mensagem: `${tableName} atualizado com sucesso` });
            } catch (error) {
                console.error(`Erro ao atualizar ${tableName}:`, error);
                res.status(500).json({ mensagem: `Erro ao atualizar ${tableName}` });
            }
        },

        // Excluir registro
        excluir: async (req, res) => {
            try {
                await deleteRecord(tableName, `id = ${req.params.id}`);
                res.status(200).json({ mensagem: `${tableName} excluído com sucesso` });
            } catch (error) {
                console.error(`Erro ao excluir ${tableName}:`, error);
                res.status(500).json({ mensagem: `Erro ao excluir ${tableName}` });
            }
        },

        // Buscar com filtro personalizado
        buscarComFiltro: async (req, res) => {
            try {
                const { campo, valor } = req.query;
                const registros = await readAll(tableName, `${campo} = '${valor}'`);
                res.status(200).json(registros);
            } catch (error) {
                console.error(`Erro ao buscar ${tableName} com filtro:`, error);
                res.status(500).json({ mensagem: `Erro ao buscar ${tableName} com filtro` });
            }
        },

        // Buscar relacionamentos
        buscarRelacionamentos: async (req, res) => {
            try {
                const { tabelaRelacionada, campoRelacionamento } = req.query;
                const query = `
                    SELECT ${tabelaRelacionada}.* 
                    FROM ${tabelaRelacionada}
                    JOIN ${tableName} ON ${tabelaRelacionada}.id = ${tableName}.${campoRelacionamento}
                    WHERE ${tableName}.id = ${req.params.id}
                `;
                const registros = await readAll(tabelaRelacionada, query);
                res.status(200).json(registros);
            } catch (error) {
                console.error(`Erro ao buscar relacionamentos de ${tableName}:`, error);
                res.status(500).json({ mensagem: `Erro ao buscar relacionamentos de ${tableName}` });
            }
        }
    };
}; 