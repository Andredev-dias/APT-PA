import Link from "next/link";

interface IMenu {
    op1: string;
    op2: string;
    op3?: boolean;
    op4: number;
}

export const Menu:React.FC<IMenu> = ({op1, op2, op3, op4}) => {

    const style =
    {
        p: "bg-cyan-700 px-2 py-1 w-24 text-branco",
        nav: "text-preto bg-cyan-800 gap-3 p-3 font-robFont text-large flex flex-row justify-center align-center"
    }
    return(
        <nav className={style.nav}>
          <p className={style.p}>{op1}</p>
          <p className={style.p}>{op2}</p>
          <p className={style.p}>{op3}</p>
          <p className={style.p}>{op4}</p>
        </nav>
    )
}
