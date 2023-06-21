import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme // guarda a "tipagem" de defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
} // cria uma tipagem pro módulo styled-components que é uma extensão de ThemeType
