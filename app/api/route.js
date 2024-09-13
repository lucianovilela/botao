import frases_motivacionais from "@/app/components/Frases";
export function GET() {
  let pos =  Math.floor(frases_motivacionais.length * Math.random());
  let f =
    frases_motivacionais[ pos  ];

  return Response.json({id:pos,  message: f });

}