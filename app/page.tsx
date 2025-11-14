import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Sparkles, Target, TrendingUp, Users, MessageCircle, Calendar, FileText, Video, ClipboardCheck, Zap, Heart, Trophy, Apple, Dumbbell, Activity, Mail, Clock, Star, ArrowRight, Shield, Award } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-16 md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="container relative mx-auto px-4">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border bg-background/50 px-4 py-2 backdrop-blur-sm shadow-sm">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Nutricionista Especializada</span>
              </div>
              
              <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Transforme sua saúde com{" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  atendimento individualizado
                </span>
              </h1>
              
              <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
                Sente-se constantemente <strong>cansada</strong>, <strong>sem energia, com unhas e cabelos enfraquecidos</strong>? Tem dificuldade para <strong>emagrecer ou ganhar massa muscular</strong>?
              </p>

              <p className="text-pretty text-base text-foreground leading-relaxed">
                Ofereço um atendimento individualizado e baseado em evidências, com foco na transformação real da sua saúde, do seu corpo e da sua relação com a alimentação.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="group gap-2 shadow-lg hover:shadow-xl transition-all">
                  Agendar Consulta
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2 shadow-sm">
                  <MessageCircle className="h-4 w-4" />
                  Tire suas Dúvidas
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">Especialização</div>
                    <div className="text-muted-foreground">Avaliação Metabólica</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Trophy className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">Pós-graduação</div>
                    <div className="text-muted-foreground">Nutrição Esportiva</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 to-primary/0 blur-3xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2917-scaled-ELrXgpgiimTi3je7GXKDZT8UvL6NSS.jpg"
                  alt="Nutricionista Jocelma Tossin Martins"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 rounded-xl bg-background p-4 shadow-2xl border">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm text-muted-foreground">Vidas Transformadas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-2">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Meu Compromisso</span>
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Seu objetivo se torna também o meu
            </h2>
            <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
              Sou nutricionista com especialização em Avaliação Metabólica e Nutricional e Pós-graduação em Nutrição Esportiva. Atendo presencialmente e on-line, adaptando cada plano às suas necessidades, rotina e objetivos.
            </p>
            <p className="text-pretty text-base text-foreground leading-relaxed">
              Meu compromisso é te acompanhar com empatia, conhecimento e responsabilidade em cada etapa da sua jornada.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Apple,
                title: "Regular o Metabolismo",
                description: "Suplementação personalizada de vitaminas e minerais"
              },
              {
                icon: TrendingUp,
                title: "Emagrecer com Saúde",
                description: "De forma saudável e sustentável"
              },
              {
                icon: Dumbbell,
                title: "Ganhar Massa Magra",
                description: "Com segurança e eficiência"
              },
              {
                icon: Zap,
                title: "Aumentar Energia",
                description: "Durante os treinos e no dia a dia"
              }
            ].map((item, index) => (
              <Card key={index} className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border bg-background/80 backdrop-blur-sm px-4 py-2">
              <Target className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Como Funciona</span>
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Atendimento 100% Individualizado
            </h2>
            <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
              Meus atendimentos nutricionais são individualizados, então, tanto o planejamento alimentar quanto a prescrição de fórmulas são realizados respeitando a individualidade e a necessidade nutricional do paciente.
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-6">
            {[
              {
                icon: Calendar,
                step: "1º",
                title: "Agendamos o atendimento",
                description: "Escolha o melhor horário para você"
              },
              {
                icon: FileText,
                step: "2º",
                title: "Questionário prévio",
                description: "Uma semana antes lhe envio por email um questionário para ganharmos tempo antes da consulta, se você tiver exames laboratoriais vou analisando durante esse período"
              },
              {
                icon: Video,
                step: "3º",
                title: "Atendimento online",
                description: "O atendimento será realizado pelas plataformas Meet ou Zoom e terá duração de 40 min a 1 hora"
              },
              {
                icon: MessageCircle,
                step: "4º",
                title: "Privacidade total",
                description: "No dia do atendimento você terá toda privacidade, poderá relatar todas as suas queixas e tirar todas as suas dúvidas"
              },
              {
                icon: Activity,
                step: "5º",
                title: "Análise completa",
                description: "Se necessário, solicitarei mais exames laboratoriais para complementar minha análise"
              },
              {
                icon: ClipboardCheck,
                step: "6º",
                title: "Plano alimentar",
                description: "Seu plano alimentar será entregue em até uma semana após o atendimento, através das plataformas Meet ou Zoom, neste dia explicarei todo nosso planejamento, se necessário você receberá a prescrição das fórmulas para iniciarmos a reposição de nutrientes"
              }
            ].map((item, index) => (
              <div key={index} className="group">
                <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all hover:shadow-lg bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0">
                        <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {item.step}
                          </span>
                          <h3 className="font-semibold text-lg">{item.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-all">
              <Calendar className="h-5 w-5" />
              Quero Agendar Minha Consulta
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-2">
              <Heart className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Depoimentos</span>
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Eles viveram a mudança — e contaram como foi!
            </h2>
            <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
              Nada é mais valioso do que ouvir diretamente daqueles que vivenciaram meu atendimento. Os depoimentos a seguir refletem experiências reais de clientes que confiaram em meu trabalho e alcançaram resultados positivos.
            </p>
          </div>

          {/* Before/After Image */}
          <div className="mb-12 mx-auto max-w-4xl">
            <Card className="overflow-hidden border-2 shadow-2xl">
              <CardContent className="p-0">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Inserir-um-pouquinho-de-texto-1-4bp0Kx48xS3DuZGPBckVWmgtIB49Mc.png"
                  alt="Antes e Depois - Transformação Real"
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary/50 transition-all shadow-lg hover:shadow-xl">
              <CardContent className="p-8 space-y-4">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  "Antes do acompanhamento nutricional, eu me sentia exausta o tempo todo. Não conseguia emagrecer, meus treinos não rendiam e meu corpo não respondia como eu esperava. Com a orientação certa e a reposição personalizada de vitaminas e minerais, tudo mudou. Hoje tenho muito mais energia, meu metabolismo está ativo, consegui emagrecer com saúde e minha performance melhorou demais! Me sinto mais forte, disposta e confiante. Foi um divisor de águas na minha vida!"
                </p>
                <div className="pt-4 border-t">
                  <div className="font-semibold text-primary text-lg mb-1">
                    Sensacional! Melhor do que eu esperava!
                  </div>
                  <div className="font-semibold">Meri Bresolim</div>
                  <div className="text-sm text-muted-foreground">Autônoma</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all shadow-lg hover:shadow-xl">
              <CardContent className="p-8 space-y-4">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  "Procurei a consulta porque estava com baixa energia, dificuldade para ganhar massa muscular e vivia me sentindo estagnado, mesmo treinando firme. A avaliação foi super completa, e a reposição de vitaminas e minerais fez toda a diferença. Hoje me sinto mais disposto, consegui melhorar meu rendimento nos treinos, ganhei massa magra e finalmente comecei a ver resultados reais. Acompanhamento de qualidade faz toda a diferença!"
                </p>
                <div className="pt-4 border-t">
                  <div className="font-semibold text-primary text-lg mb-1">
                    Muito feliz com os resultados!
                  </div>
                  <div className="font-semibold">Maurício Fiuza</div>
                  <div className="text-sm text-muted-foreground">Chefe de setor</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border bg-background/80 backdrop-blur-sm px-4 py-2">
              <MessageCircle className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Perguntas Frequentes</span>
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Tire suas Dúvidas
            </h2>
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
            {[
              {
                question: "1. Atende on-line e presencial?",
                answer: "Sim! Faço atendimentos presenciais, home care e também on-line, com a mesma qualidade e atenção individualizada. Você escolhe o que for mais prático para sua rotina."
              },
              {
                question: "2. O plano alimentar é o mesmo para todo mundo?",
                answer: "Não. Cada plano é 100% personalizado, levando em conta seu objetivo, exames, rotina, preferências alimentares e histórico de saúde."
              },
              {
                question: "3. Você trabalha com suplementação?",
                answer: "Sim. Utilizo a suplementação de forma estratégica, especialmente na reposição de vitaminas e minerais, sempre com base em avaliação individual e, quando necessário, exames laboratoriais."
              },
              {
                question: "4. Preciso fazer exames antes da consulta?",
                answer: "Não obrigatoriamente. Se você já tiver exames recentes, eles são bem-vindos. Caso contrário, podemos solicitar após a primeira consulta, se houver necessidade."
              },
              {
                question: "5. Você ajuda com emagrecimento e ganho de massa muscular?",
                answer: "Sim! Esses são dois dos principais objetivos que trabalho com meus pacientes, sempre com foco em saúde, performance e resultados duradouros."
              },
              {
                question: "6. Quanto tempo leva para ver resultados?",
                answer: "Isso varia de pessoa para pessoa. Com consistência e acompanhamento adequado, muitas pessoas já notam melhora na disposição e metabolismo nas primeiras semanas."
              },
              {
                question: "7. Como funciona o atendimento on-line?",
                answer: "A consulta é feita por vídeo chamada, com a mesma duração, atenção e aprofundamento do atendimento presencial. Você recebe tudo por e-mail: plano alimentar, orientações, suplementação e materiais de apoio."
              }
            ].map((item, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all shadow-md hover:shadow-lg bg-background/80 backdrop-blur-sm">
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-semibold text-lg flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item.question}</span>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-8">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container relative mx-auto px-4">
          <Card className="border-2 border-primary/20 shadow-2xl overflow-hidden max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border bg-primary/10 px-4 py-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Comece Sua Transformação Hoje</span>
              </div>
              
              <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
                Pronta para transformar sua saúde?
              </h2>
              
              <p className="text-pretty text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Agende sua consulta e receba um atendimento personalizado, com foco nos seus objetivos e necessidades. Sua jornada de transformação começa aqui.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-all">
                  <Calendar className="h-5 w-5" />
                  Agendar Minha Consulta
                </Button>
                <Button size="lg" variant="outline" className="gap-2 shadow-sm">
                  <Mail className="h-5 w-5" />
                  Enviar Mensagem
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-8 pt-8 border-t">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">40-60 min</div>
                    <div className="text-sm text-muted-foreground">Por consulta</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Video className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Online & Presencial</div>
                    <div className="text-sm text-muted-foreground">Você escolhe</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">100% Individualizado</div>
                    <div className="text-sm text-muted-foreground">Plano personalizado</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="text-center md:text-left">
              <p className="font-semibold text-foreground mb-1">Nutricionista Jocelma Tossin Martins</p>
              <p>Especialização em Avaliação Metabólica e Nutrição Esportiva</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a>
            </div>
          </div>
          <div className="text-center mt-6 text-xs text-muted-foreground">
            © 2025 - Todos os Direitos Reservados
          </div>
        </div>
      </footer>
    </div>
  );
}
