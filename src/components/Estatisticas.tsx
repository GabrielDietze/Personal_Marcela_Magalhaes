import { Users, Award, TrendingUp, Heart } from 'lucide-react';

const estatisticas = [
  {
    icon: Users,
    numero: '200+',
    label: 'Clientes Transformados',
    cor: 'text-amber-500'
  },
  {
    icon: Award,
    numero: '98%',
    label: 'Taxa de Satisfação',
    cor: 'text-amber-500'
  },
  {
    icon: TrendingUp,
    numero: '5+',
    label: 'Anos de Experiência',
    cor: 'text-amber-500'
  },
  {
    icon: Heart,
    numero: '100%',
    label: 'Dedicação Personalizada',
    cor: 'text-amber-500'
  }
];

export function Estatisticas() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-black to-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {estatisticas.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-6 bg-black/50 border border-amber-500/20 rounded-xl hover:border-amber-500/40 hover:bg-black/70 transition-all"
              >
                <Icon className={`${stat.cor} mx-auto mb-4`} size={40} aria-hidden="true" />
                <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">
                  {stat.numero}
                </div>
                <p className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
