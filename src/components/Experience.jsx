import { useRef } from 'react';
import { EXPERIENCE } from '../constants';
import { motion } from 'framer-motion';

// Calculates "X yrs Y mos" or "Y mos" between a start date and now (or an end date)
const calcDuration = (startStr, endStr = null) => {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];
  const parseDate = (str) => {
    const [mon, yr] = str.trim().split(' ');
    return new Date(parseInt(yr), months.indexOf(mon), 1);
  };

  const start = parseDate(startStr);
  const end = endStr ? parseDate(endStr) : new Date();

  // +1 makes both start and end months inclusive
  let totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) + 1;

  const yrs = Math.floor(totalMonths / 12);
  const mos = totalMonths % 12;

  const parts = [];
  if (yrs > 0) parts.push(`${yrs} yr${yrs > 1 ? 's' : ''}`);
  if (mos > 0) parts.push(`${mos} mo${mos > 1 ? 's' : ''}`);
  return parts.join(' ') || '< 1 mo';
};

// Dynamic duration string for each role
const getDuration = (exp) => {
  if (exp.startMonth && !exp.endMonth) {
    return `${exp.startMonth} - Present · ${calcDuration(exp.startMonth)}`;
  }
  if (exp.startMonth && exp.endMonth) {
    return `${exp.startMonth} - ${exp.endMonth} · ${calcDuration(exp.startMonth, exp.endMonth)}`;
  }
  return exp.duration;
};

// Total tenure at company (from earliest start to now)
const getTotalTenure = () => {
  const earliest = EXPERIENCE.reduce((min, exp) => {
    if (!exp.startMonth) return min;
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ];
    const [mon, yr] = exp.startMonth.trim().split(' ');
    const d = new Date(parseInt(yr), months.indexOf(mon), 1);
    return !min || d < min ? d : min;
  }, null);

  if (!earliest) return '';
  const now = new Date();
  let totalMonths =
    (now.getFullYear() - earliest.getFullYear()) * 12 +
    (now.getMonth() - earliest.getMonth()) + 1;

  const yrs = Math.floor(totalMonths / 12);
  const mos = totalMonths % 12;
  const parts = [];
  if (yrs > 0) parts.push(`${yrs} yr${yrs > 1 ? 's' : ''}`);
  if (mos > 0) parts.push(`${mos} mo${mos > 1 ? 's' : ''}`);
  return parts.join(' ') || '< 1 mo';
};

const Experience = () => {
  const experienceRef = useRef(null);

  return (
    <section
      className="p-5 pt-24 max-w-7xl mx-auto"
      id="experience"
      ref={experienceRef}
    >
      <div className="mx-auto max-w-full">
        <h2 className="mb-6 text-center text-3xl font-medium lg:text-4xl">
          EXPERIENCE
        </h2>
        <div className="flex flex-col border border-purple-300/20 rounded-lg py-10 px-5">
          {/* Company Header */}
          <div className="mb-8">
            <p className="font-semibold text-lg text-white">Thoughtplex Private Limited</p>
            <p className="text-sm text-purple-300/70">Full-time · {getTotalTenure()}</p>
            <p className="text-sm text-purple-300/60">Bengaluru, Karnataka, India · Remote</p>
          </div>

          <div className="flex flex-col space-y-10">
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={exp.id}
                className=""
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <h3 className="mb-1 text-lg sm:text-xl lg:text-2xl font-semibold text-violet-200">
                  {exp.role}
                </h3>
                <p className="mb-4 text-sm text-purple-300/80">{getDuration(exp)}</p>
                <div className="space-y-3">
                  {exp.points.map((point, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3 group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-purple-400 to-violet-500 shadow-[0_0_6px_rgba(168,85,247,0.5)] group-hover:shadow-[0_0_10px_rgba(168,85,247,0.8)] transition-shadow duration-300" />
                      <p className="leading-relaxed text-stone-300 group-hover:text-stone-200 transition-colors duration-300">
                        {point}
                      </p>
                    </motion.div>
                  ))}
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
