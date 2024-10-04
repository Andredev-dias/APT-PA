import { ROUTES } from "@/constants/routes";
import Link from "next/link";

interface IMenu {
    op1: string;
    op2: string;
    op3: string;
    op4: string;
    op5: string;
    op6: string;


}

export const Menu:React.FC<IMenu> = ({op1, op2, op3, op4, op5, op6}) => {

    const style =
    {
        p: "bg-cyan-700 px-2 py-1 w-auto text-branco cursor-pointer hover:bg-cyan-500",
        nav: "text-preto bg-cyan-800 gap-3 p-3 font-robFont text-large flex flex-row justify-center align-center"
    }
    return(
        <nav className={style.nav}>
          <Link href={ROUTES.home} className={style.p}>{op1}</Link>
          <Link  href={ROUTES.maths} className={style.p}>{op2}</Link>
          <Link href={ROUTES.generalFunction} className={style.p}>{op3}</Link>
          <Link href={ROUTES.fetchNativo} className={style.p}>{op4}</Link>
          <Link href={ROUTES.axiosPage} className={style.p}>{op5}</Link>
          <Link href={ROUTES.serverPage} className={style.p}>{op6}</Link>


        </nav>
    )
}
