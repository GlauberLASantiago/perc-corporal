/**
 * BIBLIOTECA DE PADRÕES RÍTMICOS - PERCUSSÃO CORPORAL
 * Este arquivo contém 50 células rítmicas e jogos educativos para aulas de música.
 * O aplicativo principal (index.html) carrega esta variável automaticamente.
 */

window.padroesCorporais = {

    // ==========================================
    // GRUPO 1: FUNDAMENTOS (SEMÍNIMAS E PULSO)
    // ==========================================
    "01. Fundamento: O Pulso (Pés)": [
        {step: 0, f: 'R', t: 'Pé'}, {step: 4, f: 'L', t: 'Pé'}, {step: 8, f: 'R', t: 'Pé'}, {step: 12, f: 'L', t: 'Pé'},
        {step: 16, f: 'R', t: 'Pé'}, {step: 20, f: 'L', t: 'Pé'}, {step: 24, f: 'R', t: 'Pé'}, {step: 28, f: 'L', t: 'Pé'}
    ],
    "02. Fundamento: O Pulso (Palmas)": [
        {step: 0, f: 'R', t: 'Palma'}, {step: 4, f: 'L', t: 'Palma'}, {step: 8, f: 'R', t: 'Palma'}, {step: 12, f: 'L', t: 'Palma'},
        {step: 16, f: 'R', t: 'Palma'}, {step: 20, f: 'L', t: 'Palma'}, {step: 24, f: 'R', t: 'Palma'}, {step: 28, f: 'L', t: 'Palma'}
    ],
    "03. Fundamento: Marcha Básica (Pé e Palma)": [
        {step: 0, f: 'R', t: 'Pé'}, {step: 4, f: 'R', t: 'Palma'}, {step: 8, f: 'L', t: 'Pé'}, {step: 12, f: 'R', t: 'Palma'},
        {step: 16, f: 'R', t: 'Pé'}, {step: 20, f: 'R', t: 'Palma'}, {step: 24, f: 'L', t: 'Pé'}, {step: 28, f: 'R', t: 'Palma'}
    ],
    "04. Fundamento: Subindo a Escada": [
        {step: 0, f: 'R', t: 'Pé'}, {step: 4, f: 'R', t: 'Coxa'}, {step: 8, f: 'R', t: 'Peito'}, {step: 12, f: 'R', t: 'Palma'},
        {step: 16, f: 'L', t: 'Pé'}, {step: 20, f: 'L', t: 'Coxa'}, {step: 24, f: 'L', t: 'Peito'}, {step: 28, f: 'R', t: 'Palma'}
    ],
    "05. Fundamento: Descendo a Escada": [
        {step: 0, f: 'R', t: 'Estalo'}, {step: 4, f: 'R', t: 'Palma'}, {step: 8, f: 'R', t: 'Peito'}, {step: 12, f: 'R', t: 'Coxa'},
        {step: 16, f: 'L', t: 'Estalo'}, {step: 20, f: 'R', t: 'Palma'}, {step: 24, f: 'L', t: 'Peito'}, {step: 28, f: 'L', t: 'Coxa'}
    ],

    // ==========================================
    // GRUPO 2: DIVISÕES (COLCHEIAS E CONTRATEMPO)
    // ==========================================
    "06. Divisão: Colcheias (Coxas)": [
        {step: 0, f: 'R', t: 'Coxa'}, {step: 2, f: 'L', t: 'Coxa'}, {step: 4, f: 'R', t: 'Coxa'}, {step: 6, f: 'L', t: 'Coxa'},
        {step: 8, f: 'R', t: 'Coxa'}, {step: 10, f: 'L', t: 'Coxa'}, {step: 12, f: 'R', t: 'Coxa'}, {step: 14, f: 'L', t: 'Coxa'},
        {step: 16, f: 'R', t: 'Coxa'}, {step: 18, f: 'L', t: 'Coxa'}, {step: 20, f: 'R', t: 'Coxa'}, {step: 22, f: 'L', t: 'Coxa'},
        {step: 24, f: 'R', t: 'Coxa'}, {step: 26, f: 'L', t: 'Coxa'}, {step: 28, f: 'R', t: 'Coxa'}, {step: 30, f: 'L', t: 'Coxa'}
    ],
    "07. Divisão: O Contratempo (Pé e Estalo)": [
        {step: 0, f: 'R', t: 'Pé'}, {step: 2, f: 'R', t: 'Estalo'}, {step: 4, f: 'L', t: 'Pé'}, {step: 6, f: 'L', t: 'Estalo'},
        {step: 8, f: 'R', t: 'Pé'}, {step: 10, f: 'R', t: 'Estalo'}, {step: 12, f: 'L', t: 'Pé'}, {step: 14, f: 'L', t: 'Estalo'},
        {step: 16, f: 'R', t: 'Pé'}, {step: 18, f: 'R', t: 'Estalo'}, {step: 20, f: 'L', t: 'Pé'}, {step: 22, f: 'L', t: 'Estalo'},
        {step: 24, f: 'R', t: 'Pé'}, {step: 26, f: 'R', t: 'Estalo'}, {step: 28, f: 'L', t: 'Pé'}, {step: 30, f: 'L', t: 'Estalo'}
    ],
    "08. Divisão: Alternando Níveis (Pé e Peito)": [
        {step: 0, f: 'R', t: 'Pé'}, {step: 2, f: 'L', t: 'Peito'}, {step: 4, f: 'L', t: 'Pé'}, {step: 6, f: 'R', t: 'Peito'},
        {step: 8, f: 'R', t: 'Pé'}, {step: 10, f: 'L', t: 'Peito'}, {step: 12, f: 'L', t: 'Pé'}, {step: 14, f: 'R', t: 'Peito'},
        {step: 16, f: 'R', t: 'Pé'}, {step: 18, f: 'L', t: 'Peito'}, {step: 20, f: 'L', t: 'Pé'}, {step: 22, f: 'R', t: 'Peito'},
        {step: 24, f: 'R', t: 'Pé'}, {step: 26, f: 'L', t: 'Peito'}, {step: 28, f: 'L', t: 'Pé'}, {step: 30, f: 'R', t: 'Peito'}
    ],
    "09. Divisão: Peito Duplo no Contratempo": [
        {step: 0, f: 'R', t: 'Pé'}, {step: 2, f: 'R', t: 'Peito'}, {step: 3, f: 'L', t: 'Peito'},
        {step: 4, f: 'R', t: 'Palma'}, {step: 6, f: 'R', t: 'Peito'}, {step: 7, f: 'L', t: 'Peito'},
        {step: 8, f: 'L', t: 'Pé'}, {step: 10, f: 'R', t: 'Peito'}, {step: 11, f: 'L', t: 'Peito'},
        {step: 12, f: 'R', t: 'Palma'}, {step: 14, f: 'R', t: 'Peito'}, {step: 15, f: 'L', t: 'Peito'},
        {step: 16, f: 'R', t: 'Pé'}, {step: 18, f: 'R', t: 'Peito'}, {step: 19, f: 'L', t: 'Peito'},
        {step: 20, f: 'R', t: 'Palma'}, {step: 22, f: 'R', t: 'Peito'}, {step: 23, f: 'L', t: 'Peito'},
        {step: 24, f: 'L', t: 'Pé'}, {step: 26, f: 'R', t: 'Peito'}, {step: 27, f: 'L', t: 'Peito'},
        {step: 28, f: 'R', t: 'Palma'}, {step: 30, f: 'R', t: 'Peito'}, {step: 31, f: 'L', t: 'Peito'}
    ],
    "10. Divisão: Síncopa Básica (Tum-Pa-Tum)": [
        {step: 0, f: 'R', t: 'Pé'}, {step: 2, f: 'R', t: 'Palma'}, {step: 4, f: 'L', t: 'Pé'},
        {step: 8, f: 'L', t: 'Pé'}, {step: 10, f: 'R', t: 'Palma'}, {step: 12, f: 'R', t: 'Pé'},
        {step: 16, f: 'R', t: 'Pé'}, {step: 18, f: 'R', t: 'Palma'}, {step: 20, f: 'L', t: 'Pé'},
        {step: 24, f: 'L', t: 'Pé'}, {step: 26, f: 'R', t: 'Palma'}, {step: 28, f: 'R', t: 'Pé'}
    ],

    // ==========================================
    // GRUPO 3: SUBDIVISÕES E VELOCIDADE
    // ==========================================
    "11. Subdivisão: Metralhadora (Semicolcheias)": [
        {step: 0, f: 'R', t: 'Peito'}, {step: 1, f: 'L', t: 'Peito'}, {step: 2, f: 'R', t: 'Peito'}, {step: 3, f: 'L', t: 'Peito'},
        {step: 4, f: 'R', t: 'Peito'}, {step: 5, f: 'L', t: 'Peito'}, {step: 6, f: 'R', t: 'Peito'}, {step: 7, f: 'L', t: 'Peito'},
        {step: 8, f: 'R', t: 'Peito'}, {step: 9, f: 'L', t: 'Peito'}, {step: 10, f: 'R', t: 'Peito'}, {step: 11, f: 'L', t: 'Peito'},
        {step: 12, f: 'R', t: 'Peito'}, {step: 13, f: 'L', t: 'Peito'}, {step: 14, f: 'R', t: 'Peito'}, {step: 15, f: 'L', t: 'Peito'},
        {step: 16, f: 'R', t: 'Peito'}, {step: 17, f: 'L', t: 'Peito'}, {step: 18, f: 'R', t: 'Peito'}, {step: 19, f: 'L', t: 'Peito'},
        {step: 20, f: 'R', t: 'Peito'}, {step: 21, f: 'L', t: 'Peito'}, {step: 22, f: 'R', t: 'Peito'}, {step: 23, f: 'L', t: 'Peito'},
        {step: 24, f: 'R', t: 'Peito'}, {step: 25, f: 'L', t: 'Peito'}, {step: 26, f: 'R', t: 'Peito'}, {step: 27, f: 'L', t: 'Peito'},
        {step: 28, f: 'R', t: 'Peito'}, {step: 29, f: 'L', t: 'Peito'}, {step: 30, f: 'R', t: 'Peito'}, {step: 31, f: 'L', t: 'Peito'}
    ],
    "12. Rudimento: Paradiddle nas Coxas (DEDD EDEE)": [
        {step: 0, f: 'R', t: 'Coxa'}, {step: 1, f: 'L', t: 'Coxa'}, {step: 2, f: 'R', t: 'Coxa'}, {step: 3, f: 'R', t: 'Coxa'},
        {step: 4, f: 'L', t: 'Coxa'}, {step: 5, f: 'R', t: 'Coxa'}, {step: 6, f: 'L', t: 'Coxa'}, {step: 7, f: 'L', t: 'Coxa'},
        {step: 8, f: 'R', t: 'Coxa'}, {step: 9, f: 'L', t: 'Coxa'}, {step: 10, f: 'R', t: 'Coxa'}, {step: 11, f: 'R', t: 'Coxa'},
        {step: 12, f: 'L', t: 'Coxa'}, {step: 13, f: 'R', t: 'Coxa'}, {step: 14, f: 'L', t: 'Coxa'}, {step: 15, f: 'L', t: 'Coxa'},
        {step: 16, f: 'R', t: 'Coxa'}, {step: 17, f: 'L', t: 'Coxa'}, {step: 18, f: 'R', t: 'Coxa'}, {step: 19, f: 'R', t: 'Coxa'},
        {step: 20, f: 'L', t: 'Coxa'}, {step: 21, f: 'R', t: 'Coxa'}, {step: 22, f: 'L', t: 'Coxa'}, {step: 23, f: 'L', t: 'Coxa'},
        {step: 24, f: 'R', t: 'Coxa'}, {step: 25, f: 'L', t: 'Coxa'}, {step: 26, f: 'R', t: 'Coxa'}, {step: 27, f: 'R', t: 'Coxa'},
        {step: 28, f: 'L', t: 'Coxa'}, {step: 29, f: 'R', t: 'Coxa'}, {step: 30, f: 'L', t: 'Coxa'}, {step: 31, f: 'L', t: 'Coxa'}
    ],
    "13. Subdivisão: O Cavalo (1 Pé, 3 Peitos)": [
        {step: 0, f: 'R', t: 'Pé'}, {step: 1, f: 'L', t: 'Peito'}, {step: 2, f: 'R', t: 'Peito'}, {step: 3, f: 'L', t: 'Peito'},
        {step: 4, f: 'L', t: 'Pé'}, {step: 5, f: 'R', t: 'Peito'}, {step: 6, f: 'L', t: 'Peito'}, {step: 7, f: 'R', t: 'Peito'},
        {step: 8, f: 'R', t: 'Pé'}, {step: 9, f: 'L', t: 'Peito'}, {step: 10, f: 'R', t: 'Peito'}, {step: 11, f: 'L', t: 'Peito'},
        {step: 12, f: 'L', t: 'Pé'}, {step: 13, f: 'R', t: 'Peito'}, {step: 14, f: 'L', t: 'Peito'}, {step: 15, f: 'R', t: 'Peito'},
        {step: 16, f: 'R', t: 'Pé'}, {step: 17, f: 'L', t: 'Peito'}, {step: 18, f: 'R', t: 'Peito'}, {step: 19, f: 'L', t: 'Peito'},
        {step: 20, f: 'L', t: 'Pé'}, {step: 21, f: 'R', t: 'Peito'}, {step: 22, f: 'L', t: 'Peito'}, {step: 23, f: 'R', t: 'Peito'},
        {step: 24, f: 'R', t: 'Pé'}, {step: 25, f: 'L', t: 'Peito'}, {step: 26, f: 'R', t: 'Peito'}, {step: 27, f: 'L', t: 'Peito'},
        {step: 28, f: 'L', t: 'Pé'}, {step: 29, f: 'R', t: 'Peito'}, {step: 30, f: 'L', t: 'Peito'}, {step: 31, f: 'R', t: 'Peito'}
    ],
    "14. Subdivisão: Rulo e Acento na Palma": [
        {step: 0, f: 'R', t: 'Palma'}, {step: 1, f: 'L', t: 'Coxa'}, {step: 2, f: 'R', t: 'Coxa'}, {step: 3, f: 'L', t: 'Coxa'},
        {step: 4, f: 'R', t: 'Palma'}, {step: 5, f: 'L', t: 'Coxa'}, {step: 6, f: 'R', t: 'Coxa'}, {step: 7, f: 'L', t: 'Coxa'},
        {step: 8, f: 'R', t: 'Palma'}, {step: 9, f: 'L', t: 'Coxa'}, {step: 10, f: 'R', t: 'Coxa'}, {step: 11, f: 'L', t: 'Coxa'},
        {step: 12, f: 'R', t: 'Palma'}, {step: 13, f: 'L', t: 'Coxa'}, {step: 14, f: 'R', t: 'Coxa'}, {step: 15, f: 'L', t: 'Coxa'},
        {step: 16, f: 'R', t: 'Palma'}, {step: 17, f: 'L', t: 'Coxa'}, {step: 18, f: 'R', t: 'Coxa'}, {step: 19, f: 'L', t: 'Coxa'},
        {step: 20, f: 'R', t: 'Palma'}, {step: 21, f: 'L', t: 'Coxa'}, {step: 22, f: 'R', t: 'Coxa'}, {step: 23, f: 'L', t: 'Coxa'},
        {step: 24, f: 'R', t: 'Palma'}, {step: 25, f: 'L', t: 'Coxa'}, {step: 26, f: 'R', t: 'Coxa'}, {step: 27, f: 'L', t: 'Coxa'},
        {step: 28, f: 'R', t: 'Palma'}, {step: 29, f: 'L', t: 'Coxa'}, {step: 30, f: 'R', t: 'Coxa'}, {step: 31, f: 'L', t: 'Coxa'}
    ],
    "15. Subdivisão: Subida Rápida (1 Tempo)": [
        {step: 0, f: 'R', t: 'Pé'}, {step: 1, f: 'R', t: 'Coxa'}, {step: 2, f: 'R', t: 'Peito'}, {step: 3, f: 'R', t: 'Palma'},
        {step: 4, f: 'R', t: 'Pé'}, {step: 8, f: 'L', t: 'Pé'}, {step: 9, f: 'L', t: 'Coxa'}, {step: 10, f: 'L', t: 'Peito'}, 
        {step: 11, f: 'R', t: 'Palma'}, {step: 12, f: 'L', t: 'Pé'}, {step: 16, f: 'R', t: 'Pé'}, {step: 17, f: 'R', t: 'Coxa'}, 
        {step: 18, f: 'R', t: 'Peito'}, {step: 19, f: 'R', t: 'Palma'}, {step: 20, f: 'R', t: 'Pé'}, {step: 24, f: 'L', t: 'Pé'}, 
        {step: 25, f: 'L', t: 'Coxa'}, {step: 26, f: 'L', t: 'Peito'}, {step: 27, f: 'R', t: 'Palma'}, {step: 28, f: 'L', t: 'Pé'}
    ],

    // ==========================================
    // GRUPO 4: CÉLULAS EDUCATIVAS KODÁLY/ORFF
    // ==========================================
    "16. Educativo 1: Ta, Ta, Ti-Ti, Ta": [
        {step: 0, f: 'R', t: 'Pé'}, {step: 4, f: 'L', t: 'Pé'}, {step: 8, f: 'R', t: 'Coxa'}, {step: 10, f: 'L', t: 'Coxa'}, {step: 12, f: 'R', t: 'Palma'},
        {step: 16, f: 'R', t: 'Pé'}, {step: 20, f: 'L', t: 'Pé'}, {step: 24, f: 'R', t: 'Coxa'}, {step: 26, f: 'L', t: 'Coxa'}, {step: 28, f: 'R', t: 'Palma'}
    ],
    "17. Educativo 2: Ti-Ti, Ta, Ta, Ta": [
        {step: 0, f: 'R', t: 'Coxa'}, {step: 2, f: 'L', t: 'Coxa'}, {step: 4, f: 'R', t: 'Pé'}, {step: 8, f: 'L', t: 'Pé'}, {step: 12, f: 'R', t: 'Palma'},
        {step: 16, f: 'R', t: 'Coxa'}, {step: 18, f: 'L', t: 'Coxa'}, {step: 20, f: 'R', t: 'Pé'}, {step: 24, f: 'L', t: 'Pé'}, {step: 28, f: 'R', t: 'Palma'}
    ],
    "18. Educativo 3: Tiri-Tiri, Ta, Ta, Ta": [
        {step: 0, f: 'R', t: 'Peito'}, {step: 1, f: 'L', t: 'Peito'}, {step: 2, f: 'R', t: 'Peito'}, {step: 3, f: 'L', t: 'Peito'},
        {step: 4, f: 'R', t: 'Pé'}, {step: 8, f: 'L', t: 'Pé'}, {step: 12, f: 'R', t: 'Palma'},
        {step: 16, f: 'R', t: 'Peito'}, {step: 17, f: 'L', t: 'Peito'}, {step: 18, f: 'R', t: 'Peito'}, {step: 19, f: 'L', t: 'Peito'},
        {step: 20, f: 'R', t: 'Pé'}, {step: 24, f: 'L', t: 'Pé'}, {step: 28, f: 'R', t: 'Palma'}
    ],
    "19. Educativo 4: Ta, Tiri-Tiri, Ti-Ti, Ta": [
        {step: 0, f: 'R', t: 'Pé'}, {step: 4, f: 'R', t: 'Peito'}, {step: 5, f: 'L', t: 'Peito'}, {step: 6, f: 'R', t: 'Peito'}, {step: 7, f: 'L', t: 'Peito'},
        {step: 8, f: 'R', t: 'Coxa'}, {step: 10, f: 'L', t: 'Coxa'}, {step: 12, f: 'R', t: 'Palma'},
        {step: 16, f: 'L', t: 'Pé'}, {step: 20, f: 'R', t: 'Peito'}, {step: 21, f: 'L', t: 'Peito'}, {step: 22, f: 'R', t: 'Peito'}, {step: 23, f: 'L', t: 'Peito'},
        {step: 24, f: 'R', t: 'Coxa'}, {step: 26, f: 'L', t: 'Coxa'}, {step: 28, f: 'R', t: 'Palma'}
    ],
    "20. Educativo 5: Síncopa (Ti-Ta-Ti)": [
        {step: 0, f: 'R', t: 'Coxa'}, {step: 2, f: 'R', t: 'Palma'}, {step: 6, f: 'L', t: 'Coxa'}, {step: 8, f: 'R', t: 'Pé'}, {step: 12, f: 'L', t: 'Pé'},
        {step: 16, f: 'R', t: 'Coxa'}, {step: 18, f: 'R', t: 'Palma'}, {step: 22, f: 'L', t: 'Coxa'}, {step: 24, f: 'R', t: 'Pé'}, {step: 28, f: 'L', t: 'Pé'}
    ],
    "21. Educativo 6: Galope (Ti-Tiri)": [
        {step: 0, f: 'R', t: 'Coxa'}, {step: 2, f: 'R', t: 'Peito'}, {step: 3, f: 'L', t: 'Peito'},
        {step: 4, f: 'R', t: 'Coxa'}, {step: 6, f: 'R', t: 'Peito'}, {step: 7, f: 'L', t: 'Peito'},
        {step: 8, f: 'R', t: 'Pé'}, {step: 12, f: 'L', t: 'Pé'},
        {step: 16, f: 'R', t: 'Coxa'}, {step: 18, f: 'R', t: 'Peito'}, {step: 19, f: 'L', t: 'Peito'},
        {step: 20, f: 'R', t: 'Coxa'}, {step: 22, f: 'R', t: 'Peito'}, {step: 23, f: 'L', t: 'Peito'},
        {step: 24, f: 'R', t: 'Pé'}, {step: 28, f: 'L', t: 'Pé'}
    ],
    "22. Educativo 7: Saltitante (Tiri-Ti)": [
        {step: 0, f: 'R', t: 'Peito'}, {step: 1, f: 'L', t: 'Peito'}, {step: 2, f: 'R', t: 'Coxa'},
        {step: 4, f: 'R', t: 'Peito'}, {step: 5, f: 'L', t: 'Peito'}, {step: 6, f: 'R', t: 'Coxa'},
        {step: 8, f: 'R', t: 'Pé'}, {step: 12, f: 'L', t: 'Pé'},
        {step: 16, f: 'R', t: 'Peito'}, {step: 17, f: 'L', t: 'Peito'}, {step: 18, f: 'R', t: 'Coxa'},
        {step: 20, f: 'R', t: 'Peito'}, {step: 21, f: 'L', t: 'Peito'}, {step: 22, f: 'R', t: 'Coxa'},
        {step: 24, f: 'R', t: 'Pé'}, {step: 28, f: 'L', t: 'Pé'}
    ],
    "23. Educativo 8: Pausa no Tempo 1 (Silêncio)": [
        {step: 4, f: 'R', t: 'Coxa'}, {step: 6, f: 'L', t: 'Coxa'}, {step: 8, f: 'R', t: 'Palma'}, {step: 12, f: 'R', t: 'Estalo'},
        {step: 20, f: 'R', t: 'Coxa'}, {step: 22, f: 'L', t: 'Coxa'}, {step: 24, f: 'R', t: 'Palma'}, {step: 28, f: 'L', t: 'Estalo'}
    ],
    "24. Educativo 9: Jogo de Pergunta": [
        {step: 0, f: 'R', t: 'Pé'}, {step: 4, f: 'R', t: 'Coxa'}, {step: 8, f: 'R', t: 'Peito'}, {step: 10, f: 'L', t: 'Peito'}, {step: 12, f: 'R', t: 'Peito'},
        {step: 16, f: 'L', t: 'Pé'}, {step: 20, f: 'L', t: 'Coxa'}, {step: 24, f: 'L', t: 'Peito'}, {step: 26, f: 'R', t: 'Peito'}, {step: 28, f: 'L', t: 'Peito'}
    ],
    "25. Educativo 10: Jogo de Resposta": [
        {step: 0, f: 'R', t: 'Palma'}, {step: 4, f: 'R', t: 'Palma'}, {step: 8, f: 'R', t: 'Estalo'}, {step: 12, f: 'R', t: 'Estalo'},
        {step: 16, f: 'R', t: 'Palma'}, {step: 20, f: 'R', t: 'Palma'}, {step: 24, f: 'L', t: 'Estalo'}, {step: 28, f: 'L', t: 'Estalo'}
    ],

    // ==========================================
    // GRUPO 5: CLAVES E PADRÕES GLOBAIS
    // ==========================================
    "26. Padrão: Clave Son (3-2)": [
        {step: 0, f: 'R', t: 'Palma'}, {step: 3, f: 'R', t: 'Palma'}, {step: 6, f: 'R', t: 'Palma'},
        {step: 10, f: 'R', t: 'Palma'}, {step: 12, f: 'R', t: 'Palma'},
        {step: 16, f: 'R', t: 'Pé'}, {step: 20, f: 'L', t: 'Pé'}, {step: 24, f: 'R', t: 'Pé'}, {step: 28, f: 'L', t: 'Pé'}
    ],
    "27. Padrão: Clave Rumba": [
        {step: 0, f: 'R', t: 'Palma'}, {step: 3, f: 'R', t: 'Palma'}, {step: 7, f: 'R', t: 'Palma'},
        {step: 10, f: 'R', t: 'Palma'}, {step: 12, f: 'R', t: 'Palma'},
        {step: 16, f: 'R', t: 'Pé'}, {step: 20, f: 'L', t: 'Pé'}, {step: 24, f: 'R', t: 'Pé'}, {step: 28, f: 'L', t: 'Pé'}
    ],
    "28. Padrão: Tresillo (3-3-2)": [
        {step: 0, f: 'R', t: 'Peito'}, {step: 3, f: 'L', t: 'Peito'}, {step: 6, f: 'R', t: 'Palma'},
        {step: 8, f: 'R', t: 'Pé'}, {step: 12, f: 'L', t: 'Pé'},
        {step: 16, f: 'R', t: 'Peito'}, {step: 19, f: 'L', t: 'Peito'}, {step: 22, f: 'R', t: 'Palma'},
        {step: 24, f: 'R', t: 'Pé'}, {step: 28, f: 'L', t: 'Pé'}
    ],
    "29. Padrão: Cinquillo": [
        {step: 0, f: 'R', t: 'Coxa'}, {step: 2, f: 'L', t: 'Coxa'}, {step: 3, f: 'R', t: 'Coxa'}, {step: 5, f: 'L', t: 'Coxa'}, {step: 6, f: 'R', t: 'Coxa'},
        {step: 8, f: 'R', t: 'Pé'}, {step: 12, f: 'L', t: 'Pé'},
        {step: 16, f: 'R', t: 'Coxa'}, {step: 18, f: 'L', t: 'Coxa'}, {step: 19, f: 'R', t: 'Coxa'}, {step: 21, f: 'L', t: 'Coxa'}, {step: 22, f: 'R', t: 'Coxa'},
        {step: 24, f: 'R', t: 'Pé'}, {step: 28, f: 'L', t: 'Pé'}
    ],
    "30. Padrão: Hemiola Simulada (3 contra 2)": [
        {step: 0, f: 'R', t: 'Pé'}, {step: 4, f: 'L', t: 'Pé'}, {step: 8, f: 'R', t: 'Pé'}, {step: 12, f: 'L', t: 'Pé'},
        {step: 16, f: 'R', t: 'Pé'}, {step: 20, f: 'L', t: 'Pé'}, {step: 24, f: 'R', t: 'Pé'}, {step: 28, f: 'L', t: 'Pé'},
        {step: 0, f: 'R', t: 'Palma'}, {step: 6, f: 'R', t: 'Palma'}, {step: 11, f: 'R', t: 'Palma'}, 
        {step: 16, f: 'R', t: 'Palma'}, {step: 22, f: 'R', t: 'Palma'}, {step: 27, f: 'R', t: 'Palma'}
    ],

    // ==========================================
    // GRUPO 6: ESTILOS MUSICAIS (BRASIL & MUNDO)
    // ==========================================
    "31. Estilo: Rock Básico (We Will Rock You)": [
        {step: 0, f: 'R', t: 'Pé'}, {step: 2, f: 'L', t: 'Pé'}, {step: 4, f: 'R', t: 'Palma'},
        {step: 8, f: 'R', t: 'Pé'}, {step: 10, f: 'L', t: 'Pé'}, {step: 12, f: 'R', t: 'Palma'},
        {step: 16, f: 'R', t: 'Pé'}, {step: 18, f: 'L', t: 'Pé'}, {step: 20, f: 'R', t: 'Palma'},
        {step: 24, f: 'R', t: 'Pé'}, {step: 26, f: 'L', t: 'Pé'}, {step: 28, f: 'R', t: 'Palma'}
    ],
    "32. Estilo: Rock Animado (Bumbo Duplo)": [
        {step: 0, f: 'R', t: 'Pé'}, {step: 4, f: 'R', t: 'Palma'}, {step: 7, f: 'L', t: 'Pé'}, {step: 8, f: 'R', t: 'Pé'}, {step: 12, f: 'R', t: 'Palma'},
        {step: 16, f: 'R', t: 'Pé'}, {step: 20, f: 'R', t: 'Palma'}, {step: 23, f: 'L', t: 'Pé'}, {step: 24, f: 'R', t: 'Pé'}, {step: 28, f: 'R', t: 'Palma'}
    ],
    "33. Estilo: Reggaeton / Pop Urbano": [
        {step: 0, f: 'R', t: 'Pé'}, {step: 3, f: 'L', t: 'Coxa'}, {step: 4, f: 'R', t: 'Palma'}, {step: 6, f: 'R', t: 'Coxa'},
        {step: 8, f: 'R', t: 'Pé'}, {step: 11, f: 'L', t: 'Coxa'}, {step: 12, f: 'R', t: 'Palma'}, {step: 14, f: 'R', t: 'Coxa'},
        {step: 16, f: 'R', t: 'Pé'}, {step: 19, f: 'L', t: 'Coxa'}, {step: 20, f: 'R', t: 'Palma'}, {step: 22, f: 'R', t: 'Coxa'},
        {step: 24, f: 'R', t: 'Pé'}, {step: 27, f: 'L', t: 'Coxa'}, {step: 28, f: 'R', t: 'Palma'}, {step: 30, f: 'R', t: 'Coxa'}
    ],
    "34. Estilo: Funk Carioca Clássico": [
        {step: 0, f: 'R', t: 'Peito'}, {step: 3, f: 'R', t: 'Estalo'}, {step: 6, f: 'R', t: 'Peito'}, {step: 8, f: 'R', t: 'Peito'}, {step: 11, f: 'R', t: 'Estalo'}, {step: 14, f: 'R', t: 'Peito'},
        {step: 16, f: 'R', t: 'Peito'}, {step: 19, f: 'L', t: 'Estalo'}, {step: 22, f: 'R', t: 'Peito'}, {step: 24, f: 'R', t: 'Peito'}, {step: 27, f: 'L', t: 'Estalo'}, {step: 30, f: 'R', t: 'Peito'}
    ],
    "35. Estilo: Baião": [
        {step: 0, f: 'R', t: 'Pé'}, {step: 3, f: 'R', t: 'Coxa'}, {step: 4, f: 'R', t: 'Palma'}, {step: 6, f: 'L', t: 'Coxa'},
        {step: 8, f: 'R', t: 'Pé'}, {step: 11, f: 'R', t: 'Coxa'}, {step: 12, f: 'R', t: 'Palma'}, {step: 14, f: 'L', t: 'Coxa'},
        {step: 16, f: 'R', t: 'Pé'}, {step: 19, f: 'R', t: 'Coxa'}, {step: 20, f: 'R', t: 'Palma'}, {step: 22, f: 'L', t: 'Coxa'},
        {step: 24, f: 'R', t: 'Pé'}, {step: 27, f: 'R', t: 'Coxa'}, {step: 28, f: 'R', t: 'Palma'}, {step: 30, f: 'L', t: 'Coxa'}
    ],
    "36. Estilo: Maracatu Nação": [
        {step: 0, f: 'R', t: 'Pé'}, {step: 2, f: 'L', t: 'Peito'}, {step: 3, f: 'R', t: 'Peito'}, {step: 4, f: 'R', t: 'Pé'},
        {step: 6, f: 'L', t: 'Peito'}, {step: 7, f: 'R', t: 'Peito'}, {step: 8, f: 'R', t: 'Pé'}, {step: 12, f: 'R', t: 'Palma'},
        {step: 16, f: 'L', t: 'Pé'}, {step: 18, f: 'L', t: 'Peito'}, {step: 19, f: 'R', t: 'Peito'}, {step: 20, f: 'L', t: 'Pé'},
        {step: 22, f: 'L', t: 'Peito'}, {step: 23, f: 'R', t: 'Peito'}, {step: 24, f: 'L', t: 'Pé'}, {step: 28, f: 'R', t: 'Palma'}
    ],
    "37. Estilo: Samba (Telecoteco no Peito)": [
        {step: 0, f: 'R', t: 'Peito'}, {step: 2, f: 'L', t: 'Palma'}, {step: 3, f: 'R', t: 'Peito'}, {step: 4, f: 'L', t: 'Palma'},
        {step: 6, f: 'R', t: 'Peito'}, {step: 8, f: 'R', t: 'Peito'}, {step: 10, f: 'L', t: 'Palma'}, {step: 11, f: 'R', t: 'Peito'},
        {step: 12, f: 'L', t: 'Palma'}, {step: 14, f: 'R', t: 'Peito'},
        {step: 16, f: 'R', t: 'Peito'}, {step: 18, f: 'L', t: 'Palma'}, {step: 19, f: 'R', t: 'Peito'}, {step: 20, f: 'L', t: 'Palma'},
        {step: 22, f: 'R', t: 'Peito'}, {step: 24, f: 'R', t: 'Peito'}, {step: 26, f: 'L', t: 'Palma'}, {step: 27, f: 'R', t: 'Peito'},
        {step: 28, f: 'L', t: 'Palma'}, {step: 30, f: 'R', t: 'Peito'}
    ],
    "38. Estilo: Bossa Nova (Clave no Estalo)": [
        {step: 0, f: 'R', t: 'Pé'}, {step: 8, f: 'L', t: 'Pé'}, {step: 16, f: 'R', t: 'Pé'}, {step: 24, f: 'L', t: 'Pé'},
        {step: 0, f: 'R', t: 'Estalo'}, {step: 3, f: 'L', t: 'Estalo'}, {step: 6, f: 'R', t: 'Estalo'}, {step: 10, f: 'L', t: 'Estalo'}, {step: 14, f: 'R', t: 'Estalo'},
        {step: 18, f: 'L', t: 'Estalo'}, {step: 21, f: 'R', t: 'Estalo'}, {step: 24, f: 'L', t: 'Estalo'}, {step: 28, f: 'R', t: 'Estalo'}
    ],
    "39. Estilo: Ijexá": [
        {step: 0, f: 'R', t: 'Peito'}, {step: 3, f: 'L', t: 'Coxa'}, {step: 4, f: 'R', t: 'Peito'}, {step: 7, f: 'L', t: 'Coxa'},
        {step: 8, f: 'R', t: 'Peito'}, {step: 11, f: 'L', t: 'Coxa'}, {step: 12, f: 'R', t: 'Peito'}, {step: 15, f: 'L', t: 'Coxa'},
        {step: 16, f: 'R', t: 'Peito'}, {step: 19, f: 'L', t: 'Coxa'}, {step: 20, f: 'R', t: 'Peito'}, {step: 23, f: 'L', t: 'Coxa'},
        {step: 24, f: 'R', t: 'Peito'}, {step: 27, f: 'L', t: 'Coxa'}, {step: 28, f: 'R', t: 'Peito'}, {step: 31, f: 'L', t: 'Coxa'}
    ],
    "40. Estilo: Marcha Militar (Caixa Clara)": [
        {step: 0, f: 'R', t: 'Pé'}, {step: 2, f: 'L', t: 'Peito'}, {step: 4, f: 'R', t: 'Peito'}, {step: 6, f: 'L', t: 'Peito'},
        {step: 8, f: 'R', t: 'Pé'}, {step: 12, f: 'R', t: 'Peito'}, 
        {step: 16, f: 'L', t: 'Pé'}, {step: 18, f: 'R', t: 'Peito'}, {step: 20, f: 'L', t: 'Peito'}, {step: 22, f: 'R', t: 'Peito'},
        {step: 24, f: 'L', t: 'Pé'}, {step: 28, f: 'L', t: 'Peito'}
    ],

    // ==========================================
    // GRUPO 7: JOGOS DE COORDENAÇÃO E GIROS
    // ==========================================
    "41. Jogo: O Relógio (Giro em Semínimas)": [
        {step: 0, f: 'Pos', t: 'Frente'}, {step: 0, f: 'R', t: 'Palma'},
        {step: 4, f: 'Pos', t: 'Esq'}, {step: 4, f: 'R', t: 'Palma'},
        {step: 8, f: 'Pos', t: 'Trás'}, {step: 8, f: 'R', t: 'Palma'},
        {step: 12, f: 'Pos', t: 'Dir'}, {step: 12, f: 'R', t: 'Palma'},
        {step: 16, f: 'Pos', t: 'Frente'}, {step: 16, f: 'R', t: 'Palma'},
        {step: 20, f: 'Pos', t: 'Esq'}, {step: 20, f: 'R', t: 'Palma'},
        {step: 24, f: 'Pos', t: 'Trás'}, {step: 24, f: 'R', t: 'Palma'},
        {step: 28, f: 'Pos', t: 'Dir'}, {step: 28, f: 'R', t: 'Palma'}
    ],
    "42. Jogo: 4 Cantos Dinâmico": [
        {step: 0, f: 'Pos', t: 'Frente'}, {step: 0, f: 'R', t: 'Pé'}, {step: 2, f: 'R', t: 'Palma'}, {step: 4, f: 'L', t: 'Pé'}, {step: 6, f: 'R', t: 'Palma'},
        {step: 8, f: 'Pos', t: 'Esq'}, {step: 8, f: 'R', t: 'Pé'}, {step: 10, f: 'R', t: 'Palma'}, {step: 12, f: 'L', t: 'Pé'}, {step: 14, f: 'R', t: 'Palma'},
        {step: 16, f: 'Pos', t: 'Trás'}, {step: 16, f: 'R', t: 'Pé'}, {step: 18, f: 'R', t: 'Palma'}, {step: 20, f: 'L', t: 'Pé'}, {step: 22, f: 'R', t: 'Palma'},
        {step: 24, f: 'Pos', t: 'Dir'}, {step: 24, f: 'R', t: 'Pé'}, {step: 26, f: 'R', t: 'Palma'}, {step: 28, f: 'L', t: 'Pé'}, {step: 30, f: 'R', t: 'Palma'}
    ],
    "43. Jogo: Vai e Vem (Frente e Trás)": [
        {step: 0, f: 'Pos', t: 'Frente'}, {step: 0, f: 'R', t: 'Pé'}, {step: 2, f: 'L', t: 'Coxa'}, {step: 4, f: 'R', t: 'Peito'}, {step: 6, f: 'L', t: 'Estalo'},
        {step: 8, f: 'Pos', t: 'Trás'}, {step: 8, f: 'L', t: 'Pé'}, {step: 10, f: 'R', t: 'Coxa'}, {step: 12, f: 'L', t: 'Peito'}, {step: 14, f: 'R', t: 'Estalo'},
        {step: 16, f: 'Pos', t: 'Frente'}, {step: 16, f: 'R', t: 'Pé'}, {step: 18, f: 'L', t: 'Coxa'}, {step: 20, f: 'R', t: 'Peito'}, {step: 22, f: 'L', t: 'Estalo'},
        {step: 24, f: 'Pos', t: 'Trás'}, {step: 24, f: 'L', t: 'Pé'}, {step: 26, f: 'R', t: 'Coxa'}, {step: 28, f: 'L', t: 'Peito'}, {step: 30, f: 'R', t: 'Estalo'}
    ],
    "44. Jogo: O Labirinto (Giros Rápidos)": [
        {step: 0, f: 'Pos', t: 'Frente'}, {step: 0, f: 'R', t: 'Palma'}, 
        {step: 4, f: 'Pos', t: 'Esq'}, {step: 4, f: 'R', t: 'Pé'}, 
        {step: 8, f: 'Pos', t: 'Frente'}, {step: 8, f: 'R', t: 'Palma'}, 
        {step: 12, f: 'Pos', t: 'Dir'}, {step: 12, f: 'L', t: 'Pé'},
        {step: 16, f: 'Pos', t: 'Frente'}, {step: 16, f: 'R', t: 'Palma'}, 
        {step: 20, f: 'Pos', t: 'Trás'}, {step: 20, f: 'R', t: 'Pé'}, 
        {step: 24, f: 'Pos', t: 'Frente'}, {step: 24, f: 'R', t: 'Palma'}, 
        {step: 28, f: 'Pos', t: 'Esq'}, {step: 28, f: 'L', t: 'Pé'}
    ],
    "45. Desafio: Independência Pé/Mão (1 contra 2)": [
        {step: 0, f: 'R', t: 'Pé'}, {step: 4, f: 'L', t: 'Pé'}, {step: 8, f: 'R', t: 'Pé'}, {step: 12, f: 'L', t: 'Pé'},
        {step: 16, f: 'R', t: 'Pé'}, {step: 20, f: 'L', t: 'Pé'}, {step: 24, f: 'R', t: 'Pé'}, {step: 28, f: 'L', t: 'Pé'},
        {step: 0, f: 'R', t: 'Peito'}, {step: 2, f: 'L', t: 'Peito'}, {step: 4, f: 'R', t: 'Peito'}, {step: 6, f: 'L', t: 'Peito'},
        {step: 8, f: 'R', t: 'Peito'}, {step: 10, f: 'L', t: 'Peito'}, {step: 12, f: 'R', t: 'Peito'}, {step: 14, f: 'L', t: 'Peito'},
        {step: 16, f: 'R', t: 'Peito'}, {step: 18, f: 'L', t: 'Peito'}, {step: 20, f: 'R', t: 'Peito'}, {step: 22, f: 'L', t: 'Peito'},
        {step: 24, f: 'R', t: 'Peito'}, {step: 26, f: 'L', t: 'Peito'}, {step: 28, f: 'R', t: 'Peito'}, {step: 30, f: 'L', t: 'Peito'}
    ],
    "46. Desafio: A Cascata": [
        {step: 0, f: 'R', t: 'Estalo'}, {step: 1, f: 'L', t: 'Estalo'}, {step: 2, f: 'R', t: 'Palma'}, {step: 3, f: 'R', t: 'Palma'},
        {step: 4, f: 'R', t: 'Peito'}, {step: 5, f: 'L', t: 'Peito'}, {step: 6, f: 'R', t: 'Coxa'}, {step: 7, f: 'L', t: 'Coxa'},
        {step: 8, f: 'R', t: 'Pé'}, {step: 10, f: 'L', t: 'Pé'}, {step: 12, f: 'R', t: 'Palma'},
        {step: 16, f: 'L', t: 'Estalo'}, {step: 17, f: 'R', t: 'Estalo'}, {step: 18, f: 'R', t: 'Palma'}, {step: 19, f: 'R', t: 'Palma'},
        {step: 20, f: 'L', t: 'Peito'}, {step: 21, f: 'R', t: 'Peito'}, {step: 22, f: 'L', t: 'Coxa'}, {step: 23, f: 'R', t: 'Coxa'},
        {step: 24, f: 'L', t: 'Pé'}, {step: 26, f: 'R', t: 'Pé'}, {step: 28, f: 'R', t: 'Palma'}
    ],
    "47. Desafio: Chuva de Estalos": [
        {step: 0, f: 'R', t: 'Pé'}, {step: 1, f: 'R', t: 'Estalo'}, {step: 2, f: 'L', t: 'Estalo'}, {step: 3, f: 'R', t: 'Estalo'},
        {step: 4, f: 'L', t: 'Pé'}, {step: 5, f: 'L', t: 'Estalo'}, {step: 6, f: 'R', t: 'Estalo'}, {step: 7, f: 'L', t: 'Estalo'},
        {step: 8, f: 'R', t: 'Pé'}, {step: 9, f: 'R', t: 'Estalo'}, {step: 10, f: 'L', t: 'Estalo'}, {step: 11, f: 'R', t: 'Estalo'},
        {step: 12, f: 'L', t: 'Pé'}, {step: 13, f: 'L', t: 'Estalo'}, {step: 14, f: 'R', t: 'Estalo'}, {step: 15, f: 'L', t: 'Estalo'},
        {step: 16, f: 'R', t: 'Pé'}, {step: 17, f: 'R', t: 'Estalo'}, {step: 18, f: 'L', t: 'Estalo'}, {step: 19, f: 'R', t: 'Estalo'},
        {step: 20, f: 'L', t: 'Pé'}, {step: 21, f: 'L', t: 'Estalo'}, {step: 22, f: 'R', t: 'Estalo'}, {step: 23, f: 'L', t: 'Estalo'},
        {step: 24, f: 'R', t: 'Pé'}, {step: 25, f: 'R', t: 'Estalo'}, {step: 26, f: 'L', t: 'Estalo'}, {step: 27, f: 'R', t: 'Estalo'},
        {step: 28, f: 'L', t: 'Pé'}, {step: 29, f: 'L', t: 'Estalo'}, {step: 30, f: 'R', t: 'Estalo'}, {step: 31, f: 'L', t: 'Estalo'}
    ],
    "48. Desafio: Coordenação Mão Trocada": [
        {step: 0, f: 'R', t: 'Coxa'}, {step: 2, f: 'L', t: 'Peito'}, {step: 4, f: 'L', t: 'Coxa'}, {step: 6, f: 'R', t: 'Peito'},
        {step: 8, f: 'R', t: 'Coxa'}, {step: 10, f: 'L', t: 'Peito'}, {step: 12, f: 'R', t: 'Palma'},
        {step: 16, f: 'L', t: 'Coxa'}, {step: 18, f: 'R', t: 'Peito'}, {step: 20, f: 'R', t: 'Coxa'}, {step: 22, f: 'L', t: 'Peito'},
        {step: 24, f: 'L', t: 'Coxa'}, {step: 26, f: 'R', t: 'Peito'}, {step: 28, f: 'R', t: 'Palma'}
    ],
    "49. Desafio: Síncopa Master com Giro": [
        {step: 0, f: 'Pos', t: 'Frente'}, {step: 0, f: 'R', t: 'Pé'}, {step: 3, f: 'R', t: 'Peito'}, {step: 6, f: 'L', t: 'Peito'}, {step: 8, f: 'R', t: 'Palma'},
        {step: 10, f: 'R', t: 'Pé'}, {step: 13, f: 'L', t: 'Coxa'}, {step: 16, f: 'Pos', t: 'Trás'}, {step: 16, f: 'R', t: 'Palma'}, 
        {step: 19, f: 'R', t: 'Peito'}, {step: 22, f: 'L', t: 'Peito'}, {step: 24, f: 'R', t: 'Pé'}, {step: 26, f: 'R', t: 'Palma'}, 
        {step: 29, f: 'L', t: 'Coxa'}
    ],
    "50. Desafio: Mestre da Percussão": [
        {step: 0, f: 'Pos', t: 'Esq'}, {step: 0, f: 'R', t: 'Pé'}, {step: 1, f: 'L', t: 'Coxa'}, {step: 2, f: 'R', t: 'Peito'}, {step: 3, f: 'R', t: 'Palma'},
        {step: 4, f: 'Pos', t: 'Dir'}, {step: 4, f: 'L', t: 'Pé'}, {step: 5, f: 'R', t: 'Coxa'}, {step: 6, f: 'L', t: 'Peito'}, {step: 7, f: 'R', t: 'Palma'},
        {step: 8, f: 'Pos', t: 'Frente'}, {step: 8, f: 'R', t: 'Pé'}, {step: 9, f: 'L', t: 'Coxa'}, {step: 10, f: 'R', t: 'Peito'}, {step: 11, f: 'R', t: 'Palma'},
        {step: 12, f: 'Pos', t: 'Trás'}, {step: 12, f: 'L', t: 'Pé'}, {step: 13, f: 'R', t: 'Coxa'}, {step: 14, f: 'L', t: 'Peito'}, {step: 15, f: 'R', t: 'Palma'},
        {step: 16, f: 'Pos', t: 'Esq'}, {step: 16, f: 'R', t: 'Pé'}, {step: 17, f: 'L', t: 'Coxa'}, {step: 18, f: 'R', t: 'Peito'}, {step: 19, f: 'R', t: 'Palma'},
        {step: 20, f: 'Pos', t: 'Dir'}, {step: 20, f: 'L', t: 'Pé'}, {step: 21, f: 'R', t: 'Coxa'}, {step: 22, f: 'L', t: 'Peito'}, {step: 23, f: 'R', t: 'Palma'},
        {step: 24, f: 'Pos', t: 'Frente'}, {step: 24, f: 'R', t: 'Pé'}, {step: 25, f: 'L', t: 'Coxa'}, {step: 26, f: 'R', t: 'Peito'}, {step: 27, f: 'R', t: 'Palma'},
        {step: 28, f: 'R', t: 'Estalo'}, {step: 29, f: 'L', t: 'Estalo'}, {step: 30, f: 'R', t: 'Estalo'}, {step: 31, f: 'L', t: 'Estalo'}
    ]
};
