// pages/leaderboard.tsx

import ContestantTable from '@/app/(components)/(leaderboardContainer)/page';
import Typography from '@mui/material/Typography';


const contestants = [
  { name: 'Alice', contestsAttended: 10, score: 1200, rank: 1, registrationNumber: 'y21acs401' },
  { name: 'Bob', contestsAttended: 8, score: 1100, rank: 2, registrationNumber: 'y21acs402' },
  { name: 'Charlie', contestsAttended: 5, score: 950, rank: 3, registrationNumber: 'y21acs403' },
  { name: 'David', contestsAttended: 7, score: 980, rank: 4, registrationNumber: 'y21acs404' },
  { name: 'Eve', contestsAttended: 9, score: 1150, rank: 5, registrationNumber: 'y21acs405' },
  { name: 'Frank', contestsAttended: 6, score: 940, rank: 6, registrationNumber: 'y21acs406' },
  { name: 'Grace', contestsAttended: 11, score: 1250, rank: 7, registrationNumber: 'y21acs407' },
  { name: 'Hannah', contestsAttended: 12, score: 1300, rank: 8, registrationNumber: 'y21acs408' },
  { name: 'Ivy', contestsAttended: 8, score: 1050, rank: 9, registrationNumber: 'y21acs409' },
  { name: 'Jack', contestsAttended: 9, score: 1100, rank: 10, registrationNumber: 'y21acs410' },
  { name: 'Kim', contestsAttended: 7, score: 960, rank: 11, registrationNumber: 'y21acs411' },
  { name: 'Liam', contestsAttended: 6, score: 940, rank: 12, registrationNumber: 'y21acs412' },
  { name: 'Mia', contestsAttended: 10, score: 1150, rank: 13, registrationNumber: 'y21acs413' },
  { name: 'Noah', contestsAttended: 5, score: 890, rank: 14, registrationNumber: 'y21acs414' },
  { name: 'Olivia', contestsAttended: 8, score: 980, rank: 15, registrationNumber: 'y21acs415' },
  { name: 'Paul', contestsAttended: 7, score: 900, rank: 16, registrationNumber: 'y21acs416' },
  { name: 'Quinn', contestsAttended: 9, score: 1000, rank: 17, registrationNumber: 'y21acs417' },
  { name: 'Riley', contestsAttended: 11, score: 1250, rank: 18, registrationNumber: 'y21acs418' },
  { name: 'Sam', contestsAttended: 12, score: 1300, rank: 19, registrationNumber: 'y21acs419' },
  { name: 'Tina', contestsAttended: 8, score: 1050, rank: 20, registrationNumber: 'y21acs420' },
  { name: 'Ursula', contestsAttended: 9, score: 1100, rank: 21, registrationNumber: 'y21acs421' },
  { name: 'Victor', contestsAttended: 7, score: 950, rank: 22, registrationNumber: 'y21acs422' },
  { name: 'Wendy', contestsAttended: 6, score: 920, rank: 23, registrationNumber: 'y21acs423' },
  { name: 'Xander', contestsAttended: 5, score: 880, rank: 24, registrationNumber: 'y21acs424' },
  { name: 'Yara', contestsAttended: 8, score: 1000, rank: 25, registrationNumber: 'y21acs425' },
  { name: 'Zane', contestsAttended: 10, score: 1150, rank: 26, registrationNumber: 'y21acs426' },
  { name: 'Alan', contestsAttended: 7, score: 950, rank: 27, registrationNumber: 'y21acs427' },
  { name: 'Bella', contestsAttended: 11, score: 1250, rank: 28, registrationNumber: 'y21acs428' },
  { name: 'Chris', contestsAttended: 12, score: 1300, rank: 29, registrationNumber: 'y21acs429' },
  { name: 'Diana', contestsAttended: 8, score: 1050, rank: 30, registrationNumber: 'y21acs430' },
  { name: 'Ethan', contestsAttended: 9, score: 1100, rank: 31, registrationNumber: 'y21acs431' },
  { name: 'Fiona', contestsAttended: 6, score: 940, rank: 32, registrationNumber: 'y21acs432' },
  { name: 'George', contestsAttended: 7, score: 960, rank: 33, registrationNumber: 'y21acs433' },
  { name: 'Holly', contestsAttended: 10, score: 1150, rank: 34, registrationNumber: 'y21acs434' },
  { name: 'Ian', contestsAttended: 5, score: 890, rank: 35, registrationNumber: 'y21acs435' },
  { name: 'Judy', contestsAttended: 8, score: 980, rank: 36, registrationNumber: 'y21acs436' },
  { name: 'Kevin', contestsAttended: 7, score: 900, rank: 37, registrationNumber: 'y21acs437' },
  { name: 'Laura', contestsAttended: 9, score: 1000, rank: 38, registrationNumber: 'y21acs438' },
  { name: 'Mike', contestsAttended: 11, score: 1250, rank: 39, registrationNumber: 'y21acs439' },
  { name: 'Nina', contestsAttended: 12, score: 1300, rank: 40, registrationNumber: 'y21acs440' },
  { name: 'Oscar', contestsAttended: 8, score: 1050, rank: 41, registrationNumber: 'y21acs441' },
  { name: 'Pam', contestsAttended: 9, score: 1100, rank: 42, registrationNumber: 'y21acs442' },
  { name: 'Quincy', contestsAttended: 7, score: 950, rank: 43, registrationNumber: 'y21acs443' },
  { name: 'Rita', contestsAttended: 6, score: 920, rank: 44, registrationNumber: 'y21acs444' },
  { name: 'Steve', contestsAttended: 5, score: 880, rank: 45, registrationNumber: 'y21acs445' },
  { name: 'Tina', contestsAttended: 8, score: 1000, rank: 46, registrationNumber: 'y21acs446' },
  { name: 'Ulysses', contestsAttended: 10, score: 1150, rank: 47, registrationNumber: 'y21acs447' },
  { name: 'Vera', contestsAttended: 7, score: 950, rank: 48, registrationNumber: 'y21acs448' },
  { name: 'Will', contestsAttended: 11, score: 1250, rank: 49, registrationNumber: 'y21acs449' },
  { name: 'Xena', contestsAttended: 12, score: 1300, rank: 50, registrationNumber: 'y21acs450' },
  { name: 'Yvonne', contestsAttended: 8, score: 1050, rank: 51, registrationNumber: 'y21acs451' },
  { name: 'Zach', contestsAttended: 9, score: 1100, rank: 52, registrationNumber: 'y21acs452' },
  { name: 'Amanda', contestsAttended: 6, score: 940, rank: 53, registrationNumber: 'y21acs453' },
  { name: 'Brian', contestsAttended: 7, score: 960, rank: 54, registrationNumber: 'y21acs454' },
  { name: 'Catherine', contestsAttended: 10, score: 1150, rank: 55, registrationNumber: 'y21acs455' },
  { name: 'Daniel', contestsAttended: 5, score: 890, rank: 56, registrationNumber: 'y21acs456' },
  { name: 'Ella', contestsAttended: 8, score: 980, rank: 57, registrationNumber: 'y21acs457' },
  { name: 'Fred', contestsAttended: 7, score: 900, rank: 58, registrationNumber: 'y21acs458' },
  { name: 'Gina', contestsAttended: 9, score: 1000, rank: 59, registrationNumber: 'y21acs459' },
  { name: 'Harry', contestsAttended: 11, score: 1250, rank: 60, registrationNumber: 'y21acs460' }
];

// add rating if contest is not made mandatory  or else rating not required 



export default function Leaderboard() {
  return (
    <div style={{ marginTop: '85px', textAlign: 'center'}} className='min-h-screen'>
      {/* <Typography variant="h4" component="h2" gutterBottom>
        Leaderboard
      </Typography> */}
      <ContestantTable contestants={contestants} />
    </div>
  );
}
