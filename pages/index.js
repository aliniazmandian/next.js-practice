import Link from "next/link";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

export default function Home() {

  
  
  

  return (
    <div className=' w-screen h-screen flex flex-col justify-start items-center pt-3 bg-black text-white'>
      ferdowsi cafe
     
    





      <Accordion allowZeroExpanded ={true} className="bg-slate-500 " >
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className="bg-red-500" >
                    <Link href={`/coffes`}  >
                       <a className=" hover:text-orange-400 " >نوشیدنی های بر پایه قهوه</a>
                      </Link>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Is free will real or just an illusion?  +
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>





    </div>
  )
}
