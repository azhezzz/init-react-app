export default {};
// import _ from 'lodash';
// import dayjs from 'dayjs';
// import { GameTypeEnum } from '@/common/enums';
// import { getCsgoImgUrl } from '@/utils';

// function getKda(k, d, a, toFixed = 1) {
//   return (Number((k + a) / (d || 1)) || 0).toFixed(toFixed);
// }

// // 选手列表
// export const playerListField = {
//   [GameTypeEnum.DOTA2]: {
//     fields: {
//       current_page: { dataKeys: 'current_page', formatter: (value) => Number(value) },
//       per_page: { dataKeys: 'per_page', formatter: (value) => Number(value) },
//       last_page: { dataKeys: 'last_page', formatter: (value) => Number(value) },
//       total: { dataKeys: 'total', formatter: (value) => Number(value) },
//       data: {
//         dataKeys: 'data',
//         formatter: (value = []) => {
//           return _.map(value, (item) => {
//             const win_rate = _.get(item, 'win_rate') || 0;
//             const win_rate_text = win_rate ? Number(win_rate).toFixed(1) + '%' : win_rate;
//             return {
//               rank: _.get(item, 'place_rank') || 0,
//               player_id: _.get(item, 'player_account_id') || 0,
//               player_avatar: _.get(item, 'pro_avatar') || _.get(item, 'avatarfull') || _.get(item, 'avatar'),
//               player_name: _.get(item, 'pro_name'),
//               win_rate,
//               win_rate_text,
//               win: _.get(item, 'wins'),
//               loss: _.get(item, 'losses'),
//               points: _.get(item, 'integral')
//             };
//           });
//         }
//       }
//     }
//   },
//   [GameTypeEnum.CSGO]: {
//     fields: {
//       current_page: { dataKeys: 'current_page', formatter: (value) => Number(value) },
//       per_page: { dataKeys: 'per_page', formatter: (value) => Number(value) },
//       last_page: { dataKeys: 'last_page', formatter: (value) => Number(value) },
//       total: { dataKeys: 'total', formatter: (value) => Number(value) },
//       data: {
//         dataKeys: 'data',
//         formatter: (value = []) => {
//           return _.map(value, (item) => {
//             const win = _.get(item, 'record.win');
//             const loss = _.get(item, 'record.loss');
//             const win_rate = ((win * 100) / (win + loss || 1)).toFixed(1);
//             const win_rate_text = win_rate + '%';
//             return {
//               rank: _.get(item, 'rank') || 0,
//               player_id: _.get(item, 'player_id') || 0,
//               player_avatar: getCsgoImgUrl.playerWithId(_.get(item, 'player_id') || 0),
//               player_name: _.get(item, 'game_name') || _.get(item, 'real_name'),
//               win_rate,
//               win_rate_text,
//               win: _.get(item, 'record.win'),
//               loss: _.get(item, 'record.loss'),
//               points: _.get(item, 'rating2_0')
//             };
//           });
//         }
//       }
//     }
//   }
// };

// // 选手详情
// export const playerDetailsField = {
//   [GameTypeEnum.DOTA2]: {
//     fields: {
//       player_info: {
//         dataKeys: 'player_info',
//         formatter: (text, record) => {
//           const recent_10_k = _.get(record, 'kills');
//           const recent_10_d = _.get(record, 'deaths');
//           const recent_10_a = _.get(record, 'assists');
//           const recent_10_kda = getKda(recent_10_k, recent_10_d, recent_10_a);
//           const bonus = _.get(record, 'earnings') || 0;
//           const bonus_text = Number(bonus)
//             ? Number(bonus).toLocaleString('en-US', {
//                 style: 'currency',
//                 currency: 'USD',
//                 minimumFractionDigits: 0
//               })
//             : 0;
//           return {
//             player_id: _.get(record, 'player_account_id'),
//             player_name: _.get(record, 'pro_name') || _.get(record, 'personaname') || _.get(record, 'romanized_name'),
//             player_real_name: _.get(record, 'romanized_name'),
//             player_avatar: _.get(record, 'pro_avatar') || _.get(record, 'avatarfull') || _.get(record, 'avatar'),
//             limit_rank: _.get(record, 'place_rank'),
//             limit_rank_title: _.get(record, 'place') && `${_.get(record, 'place')}号位排名`,
//             total_rank: _.get(record, 'rank'),
//             total_rank_title: '天梯排名',
//             bonus: _.get(record, 'earnings') || 0,
//             place: _.get(record, 'place'),
//             recent_10_k,
//             recent_10_d,
//             recent_10_a,
//             recent_10_kda,
//             bonus_text,
//             team_name: _.get(record, 'team_info.tag') || _.get(record, 'team_info.name'),
//             team_id: _.get(record, 'team_info.team_id'),
//             champions: _.get(record, 'champions'),
//             win_rate: _.get(record, 'win_rate'),
//             win_nums: _.get(record, 'wins'),
//             loss_nums: _.get(record, 'losses'),
//             birthday: _.get(record, 'birthday'),
//             country_name: _.get(record, 'country'),
//             country_logo: _.get(record, 'country_img')
//           };
//         }
//       },
//       recent_data: { dataKeys: 'ability' },
//       summary: { dataKeys: 'summary' },
//       recent_matches: { dataKeys: 'recent_matches' },
//       used_heroes: { dataKeys: 'used_heroes' },
//       life_data: { dataKeys: 'life_data' },
//       achievements: { dataKeys: 'achievements' }
//     }
//   },
//   [GameTypeEnum.CSGO]: {
//     fields: {
//       player_info: {
//         dataKeys: 'player_info',
//         formatter: (text, record) => {
//           const recent_10_k = _.get(record, 'recent_kda.kills');
//           const recent_10_d = _.get(record, 'recent_kda.deaths');
//           const recent_10_a = _.get(record, 'recent_kda.assists');
//           const recent_10_kda = getKda(recent_10_k, recent_10_d, recent_10_a);
//           const bonus = _.get(text, 'total_bonus') || 0;
//           const bonus_text = Number(bonus)
//             ? Number(bonus).toLocaleString('en-US', {
//                 style: 'currency',
//                 currency: 'USD',
//                 minimumFractionDigits: 0
//               })
//             : 0;
//           const win_nums = _.get(text, 'win') || 0;
//           const loss_nums = _.get(text, 'loss') || 0;
//           const win_rate = Number(win_nums / (win_nums + loss_nums || 1)) * 100 || 0;
//           return {
//             player_id: _.get(text, 'player_id'),
//             player_name: _.get(text, 'game_name') || _.get(text, 'real_name'),
//             player_real_name: _.get(text, 'real_name'),
//             player_avatar: _.get(text, 'logo'),
//             limit_rank: _.get(text, 'partition_ranking'),
//             limit_rank_title: '地区排名',
//             total_rank: _.get(text, 'word_ranking'),
//             total_rank_title: '世界排名',
//             bonus: _.get(text, 'earnings') || 0,
//             recent_10_k,
//             recent_10_d,
//             recent_10_a,
//             recent_10_kda,
//             bonus_text,
//             team_name: _.get(record, 'team_info.team_name'),
//             team_id: _.get(record, 'team_info.team_id'),
//             champions: _.get(text, 'champions'),
//             win_rate,
//             win_nums,
//             loss_nums,
//             birthday: _.get(text, 'birthday'),
//             country_name: _.get(text, 'country'),
//             country_logo: _.get(text, 'country_logo')
//           };
//         }
//       },
//       recent_data: { dataKeys: 'ability' },
//       summary: {
//         dataKeys: 'summary',
//         formatter: (value) => {
//           for (const key in value) {
//             if (value.hasOwnProperty(key)) {
//               const element = value[key];
//               element.win_rate = element.win_rate ? element.win_rate * 100 : element.win_rate;
//               element.lost = _.max([element.loss || 0, element.lost || 0]);
//             }
//           }
//           return value;
//         }
//       },
//       life_data: { dataKeys: 'life_data' },
//       achievements: { dataKeys: 'achievements' },
//       recent_matches: {
//         dataKeys: 'recent_matches',
//         formatter: (value) => {
//           return _.orderBy(
//             _.map(value, (item) => ({
//               league_name: _.get(item, 'league_name'),
//               league_id: _.get(item, 'league_id'),
//               team_a_wins: _.get(item, 'team_a_score'),
//               team_b_wins: _.get(item, 'team_b_score'),
//               series_id: _.get(item, 'series_id'),
//               start_time: _.get(item, 'start_time'),
//               team_a_logo: getCsgoImgUrl.teamLogoWithId(_.get(item, 'team_a_id')),
//               team_b_logo: getCsgoImgUrl.teamLogoWithId(_.get(item, 'team_b_id'))
//             })),
//             'start_time',
//             'desc'
//           );
//         }
//       },
//       map_info: {
//         dataKeys: 'map_info',
//         formatter: (value) =>
//           (value || []).map((item) => {
//             const count = (_.get(item, 'wins') || 0) + (_.get(item, 'loss') || 0) || 1;
//             return {
//               ...item,
//               kills: _.get(item, 'kills') / count,
//               deaths: _.get(item, 'deaths') / count,
//               assists: _.get(item, 'assists') / count,
//               win_rate: item.win_rate ? item.win_rate * 100 : item.win_rate
//             };
//           })
//       },
//       rating_record: {
//         dataKeys: 'rating_record',
//         formatter: (value) => {
//           const result: any = {};
//           _.forEach(value, (item) => (result[dayjs.unix(item.rank_time).format('YYYYMM')] = item.rank));
//           return result;
//         }
//       }
//     }
//   }
// };

// // 选手最近战绩
// export const playerMatchesField = {
//   [GameTypeEnum.DOTA2]: {
//     fields: {
//       league_id: { dataKeys: 'league_id' },
//       league_logo: { dataKeys: 'league_logo' },
//       league_name: { dataKeys: 'league_name' },
//       team_a_id: { dataKeys: 'team_a_id' },
//       team_b_id: { dataKeys: 'team_b_id' },
//       team_a_logo: { dataKeys: 'team_a_logo' },
//       team_b_logo: { dataKeys: 'team_b_logo' },
//       team_a_name: { dataKeys: 'team_a_name' },
//       team_b_name: { dataKeys: 'team_b_name' },
//       team_a_wins: { dataKeys: 'team_a_wins' },
//       team_b_wins: { dataKeys: 'team_b_wins' },
//       series_id: { dataKeys: 'series_id' },
//       match_list: {
//         dataKeys: 'matches_list',
//         formatter: (value, record) => {
//           if (!_.isArray(value)) return value;
//           return _.map(value, (item) => {
//             const k = _.get(item, 'kills');
//             const d = _.get(item, 'deaths');
//             const a = _.get(item, 'assists');
//             const kda = getKda(k, d, a);
//             return {
//               match_id: _.get(item, 'match_id'),
//               hero_id: _.get(item, 'hero_id'),
//               is_win: _.get(item, 'is_win'),
//               duration: _.get(item, 'duration'),
//               items: _.get(item, 'items'),
//               gpm: _.get(item, 'gpm'),
//               battle: _.get(item, 'battle'),
//               hero_damage: _.get(item, 'hero_damage'),
//               receive_damage: _.get(item, 'receive_damage'),
//               k,
//               d,
//               a,
//               kda
//             };
//           });
//         }
//       }
//     }
//   },
//   [GameTypeEnum.CSGO]: {
//     fields: {
//       league_id: { dataKeys: 'league.id' },
//       league_logo: {
//         dataKeys: 'league.id',
//         formatter: (value) => getCsgoImgUrl.leagueLogoWithId(value)
//       },
//       league_name: { dataKeys: 'league.name' },
//       team_a_id: { dataKeys: 'team_a_id' },
//       team_b_id: { dataKeys: 'team_b_id' },
//       team_a_logo: {
//         dataKeys: 'team_a_id',
//         formatter: (value) => getCsgoImgUrl.teamLogoWithId(value)
//       },
//       team_b_logo: {
//         dataKeys: 'team_b_id',
//         formatter: (value) => getCsgoImgUrl.teamLogoWithId(value)
//       },
//       team_a_name: { dataKeys: 'team_a_name' }, //
//       team_b_name: { dataKeys: 'opponent.team_name' },
//       team_a_wins: { dataKeys: 'team_a_score' },
//       team_b_wins: { dataKeys: 'team_b_score' },
//       series_id: { dataKeys: 'match_id' },
//       match_list: {
//         dataKeys: 'bos',
//         formatter: (value, record) => {
//           if (!_.isArray(value)) return value;
//           return _.map(value, (item) => {
//             const k = _.get(item, 'stats.kills') || 0;
//             const d = _.get(item, 'stats.d') || 0;
//             return {
//               match_id: _.get(item, 'match_id'),
//               heros: _.get(item, 'heros'),
//               is_win: _.get(item, 'is_win'),
//               round: _.get(item, 'round'),
//               rating: _.get(item, 'stats.rating'),
//               hs: (((_.get(item, 'stats.hs') || 0) / (k || 1)) * 100).toFixed(1),
//               k,
//               d,
//               kd: k - d,
//               adr: _.get(item, 'stats.adr'),
//               kast: _.get(item, 'stats.kast'),
//               map_name: _.get(item, 'map_name')
//             };
//           });
//         }
//       }
//     }
//   }
// };
// export const playerPlayersField = {
//   [GameTypeEnum.CSGO]: {
//     fields: {
//       count: { dataKeys: 'count' },
//       player_name: {
//         dataKeys: ['game_name', 'real_name'],
//         formatter: (value) => _.get(value, 'game_name') || _.get(value, 'real_name')
//       },
//       player_avatar: {
//         dataKeys: 'player_id',
//         formatter: (value) => getCsgoImgUrl.playerWithId(value)
//       },
//       player_id: { dataKeys: 'player_id' },
//       rating: { dataKeys: 'rating' },
//       k: { dataKeys: 'k' },
//       d: { dataKeys: 'd' },
//       a: { dataKeys: 'a' },
//       kpr: { dataKeys: 'kpr' },
//       adr: { dataKeys: 'adr' },
//       hs: { dataKeys: 'hs' },
//       kast: { dataKeys: 'kast' },
//       fk: { dataKeys: 'fk_diff' },
//       mvp_count: { dataKeys: 'mvp' },
//       good_weapon: { dataKeys: 'good_weapon', formatter: (value) => (_.isString(value) ? JSON.parse(value) : value) }
//     }
//   }
// };
