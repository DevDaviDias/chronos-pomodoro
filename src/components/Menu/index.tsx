import { HouseIcon, SettingsIcon, HistoryIcon, SunIcon  } from 'lucide-react';
import { useState } from 'react';
import styles from './styles.module.css';

//variavel type para definir os tipo dark e light da minha aplicação
type AvailableThemes = 'dark' | 'light';
export default function Menu(){
  //aqui eu crei um hook par a mudança de estado dos temas e ultlizei o dark como sendo o usado naquele monento
  //ela tera apenas dois estados dark e light então ultlizei de tipagem para isso 
  //elas etava recebendo uma strindg emtao ultizei de <aqui eu defino os estados > utlizei uma variável de tipagem para isso 
  const [theme, setTheme] = useState<AvailableThemes>('dark');
  //parâmetro passado para evitar que o site recarregue atravé do href=""
  function handleThemeChange( event: React.MouseEvent<SVGSVGElement, MouseEvent>,){
    //chamado o evento para não reccaregar o site e não seguir o link
    event.preventDefault();
    console.log("clicado");
    //chamamos o setTheme e passamos como parâmetro um função que vai detectar o estado atual 

    setTheme(prevTheme => {
    //prevtheme que é o estado atual , cirmaos uma variavel que vai gereniar o estado
    //ultlizamos de opções ternarias se tiver dark vai ficar light senao vai ficar dark mesmo
    const nexTheme = prevTheme === 'dark' ? 'light': 'dark'
    //retornarmos a variável que vai detectar os estados
      return nexTheme;
    });
    //document.documentElement.setAttribute('data-theme',theme)
  }
   //arial-label e title servem apenas para usuarios terem uma melhor experência ao ultilizar o site 
    return <nav  className={styles.menu}>
      <h1>{theme}</h1>
        <a className={styles.menuLink} href="" aria-label='Ir para a home' title='Ir para a home'>
            <HouseIcon size={24} />
  
        </a>
          <a className={styles.menuLink} href="" aria-label='Ver Histórico' title='Ver Histórico' >
            <HistoryIcon size={24} />
  
        </a>
          <a className={styles.menuLink} href="" aria-label='Configurações' title='Configurações'>
            <SettingsIcon size={24} />
  
        </a>
          <a className={styles.menuLink} href="" aria-label='Mudar tema' title='Mudar tema'>
         
            <SunIcon size={24}  onClick={handleThemeChange}/>
  
        </a>
    </nav>
   //toda vez que eu clico no link meu site tenta recarregar a pagina então então tenho que criar uma manuira disso nao acontecer escrevo Onclick={(event)=> handleThemeChange(event)} com isso eu já copio o que tem dento dele e passo dentro da minha função e ira ser ultlizada pelo return
}  

