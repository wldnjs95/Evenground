export type DayKey = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';

export interface ScheduleItem {
  time: string;
  name: string;
  instructor: string;
  level: string;
  genre: string;
  duration: string;
  biweekly?: boolean;
}

export const weekDays: DayKey[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const shortDayMap: Record<DayKey, string> = {
  Monday: 'Mon', Tuesday: 'Tue', Wednesday: 'Wed',
  Thursday: 'Thu', Friday: 'Fri', Saturday: 'Sat',
};

export const weeklySchedule: Record<DayKey, ScheduleItem[]> = {
  Monday: [
    { time: '6:00 PM', name: 'Beg Choreo', instructor: 'Diana Campas / Daniel Broxton', level: 'Beginner', genre: 'Choreography', duration: '90 min', biweekly: true },
    { time: '7:30 PM', name: 'Int/Adv Choreo', instructor: 'Chris Han / Allison Li', level: 'Int/Adv', genre: 'Choreography', duration: '90 min', biweekly: true },
    { time: '9:00 PM', name: 'Int/Adv Choreo', instructor: 'Haley Sikes / Daniel Broxton', level: 'Int/Adv', genre: 'Choreography', duration: '90 min', biweekly: true },
  ],
  Tuesday: [
    { time: '6:00 PM', name: 'Beg Choreo', instructor: 'Jess Ye', level: 'Beginner', genre: 'Choreography', duration: '90 min' },
    { time: '7:30 PM', name: 'Int Choreo', instructor: 'Victoria Kayode', level: 'Intermediate', genre: 'Choreography', duration: '90 min' },
    { time: '9:00 PM', name: 'Int/Adv Choreo', instructor: 'Caro Gonzalez / Jona Vezia', level: 'Int/Adv', genre: 'Choreography', duration: '90 min', biweekly: true },
  ],
  Wednesday: [
    { time: '6:00 PM', name: 'Contemporary', instructor: 'Kelly Chiu / Jess Ye', level: 'All Levels', genre: 'Contemporary', duration: '90 min', biweekly: true },
    { time: '7:30 PM', name: 'Beg Choreo', instructor: 'Allison Li', level: 'Beginner', genre: 'Choreography', duration: '90 min' },
    { time: '9:00 PM', name: 'Int/Adv Choreo', instructor: 'Jay Rangan / Son Le', level: 'Int/Adv', genre: 'Choreography', duration: '90 min', biweekly: true },
    { time: '9:00 PM', name: 'Campbellocking', instructor: 'David Dinh / Garrett Crawford', level: 'All Levels', genre: 'Locking', duration: '90 min', biweekly: true },
  ],
  Thursday: [
    { time: '6:00 PM', name: 'Beg House', instructor: 'Chris Han', level: 'Beginner', genre: 'House', duration: '90 min' },
    { time: '7:30 PM', name: 'Int Choreo', instructor: 'Mariko Llosa / Britney Thai', level: 'Intermediate', genre: 'Choreography', duration: '90 min', biweekly: true },
    { time: '9:00 PM', name: 'Int/Adv Choreo', instructor: 'Santana Williams / Lili Offield', level: 'Int/Adv', genre: 'Choreography', duration: '90 min', biweekly: true },
  ],
  Friday: [
    { time: '6:00 PM', name: 'Beg Hip-Hop', instructor: 'Son Le', level: 'Beginner', genre: 'Hip Hop', duration: '90 min' },
    { time: '7:30 PM', name: 'Kpop Choreo', instructor: 'Jazmin Macedo', level: 'All Levels', genre: 'K-Pop', duration: '90 min' },
    { time: '9:00 PM', name: 'Int/Adv Choreo', instructor: 'Krishna Basude / Alex John', level: 'Int/Adv', genre: 'Choreography', duration: '90 min', biweekly: true },
  ],
  Saturday: [
    { time: '1:00 PM', name: 'Beg Choreo', instructor: 'Alex John / Terra Turner', level: 'Beginner', genre: 'Choreography', duration: '90 min', biweekly: true },
    { time: '2:30 PM', name: 'Kpop Choreo', instructor: 'Grace Zhang / Troy Stockman', level: 'All Levels', genre: 'K-Pop', duration: '90 min', biweekly: true },
    { time: '4:00 PM', name: 'Int/Adv Choreo', instructor: 'Andrea Castillo / Claribella Reeve', level: 'Int/Adv', genre: 'Choreography', duration: '90 min', biweekly: true },
  ],
};

export function getClassesForInstructor(name: string): { day: DayKey; item: ScheduleItem }[] {
  const results: { day: DayKey; item: ScheduleItem }[] = [];
  for (const day of weekDays) {
    for (const item of weeklySchedule[day]) {
      if (item.instructor.split(' / ').some((n) => n.trim() === name)) {
        results.push({ day, item });
      }
    }
  }
  return results;
}
