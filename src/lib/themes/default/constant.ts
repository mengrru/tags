import Utils from '../../utils'

export const Size = [2.5, 3.2, 3.9, 4.5, 5.1, 5.6, 6.1, 6.5, 6.9, 7.3, 7.7]

export const Colorscheme = [
    '93BB6D', '6D9C6D', 'D5E1A1', 'FEF4D8', 'CBE7FD', 'B7CFE2', 'DD8766', 'F6EEE1', 'E88C67', '65A9BE', 'F7C070', '636C8D', 'E2CBC4',
    'BDA995', 'BBD2DB', 'C99B92', '9BB6C7', 'EAB196', 'F0C9AC', 'A2AA71', 'F8F5EE', 'D2CEC1', '8B958A', 'D9DAEE', 'B6BDD9', 'A2C1CB', 
    'BED7DB', 'ABB4AB', 'EADCD0', 'EBA397', 'DEC152', 'CA677C', '9D89AD', 'B5CFE2', 'DDE8EB', 'F7F2EF', 'D2DEDA', '67787F', 'CFD4EE',
    '#efefef'
].map(color => Utils.Color.format(color))

