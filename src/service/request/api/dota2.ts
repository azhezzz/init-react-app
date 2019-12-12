export default {};
// import request from '../request';
// import path from '../path';
// import { LeagueStatusEnum, Dota2TeamsDataEnum, Dota2PlayerDataEnum } from '@/common/enums';

// const baseUrl = path.dota2;
// function concatUrl(url: string) {
//   return `${baseUrl}${url}`;
// }

// export default {
//   // =====================联赛相关
//   getLeagueListForDota2: ({ status = LeagueStatusEnum.RECENT, page = 1 }) =>
//     request(concatUrl('/league/v1/league_list'), { params: { status, page } }), // 获取联赛信息
//   getHeroStatisticsForDota2: () => request(concatUrl('/league/v1/heros_stat')), // 获取英雄统计
//   getOddsStatisticsForDota2: () => request(concatUrl('/league/v1/odds_winrate')), // 获取指数统计
//   getLeagueInfoForDota2: (leagueId: number) => request(concatUrl(`/league/v1/info/${leagueId}`)), // 联赛基础信息
//   getLeagueSchedulesForDota2: (zoneId: number) =>
//     request(concatUrl(`/league/v1/partition_schedule/${zoneId}`)), // 联赛赛程
//   getLeagueRulesForDota2: (zoneId: number) =>
//     request(concatUrl(`/league/v1/partition_rule/${zoneId}`)), // 联赛规则
//   getLeagueBracketForDota2: (zoneId: number) =>
//     request(concatUrl(`/league/v1/partitions_bracket/${zoneId}`)), // 联赛对阵图
//   getLeaguePartitionForDota2: (zoneId: number) =>
//     request(concatUrl(`/league/v1/partitions/${zoneId}`)), // 联赛统计
//   getLeagueOddsWinrateForDota2: (zoneId: number) =>
//     request(concatUrl(`/league/v1/partition_odds_winrate/${zoneId}`)), // 联赛指数
//   getLeagueSpecialDataForDota2: (zoneId: number) =>
//     request(concatUrl(`/league/v1/partition_special_data/${zoneId}`)), // 联赛特殊数据

//   // =====================详情页
//   getDota2MatchDetailInfo: (matchId: number) =>
//     request(concatUrl(`/dota2/v1/matches/info/${matchId}`)),
//   getDota2MatchDetailTeamInfo: (matchId: number) =>
//     request.get(concatUrl(`/dota2/v1/matches/teams_compared/${matchId}`)),
//   getDota2MatchDetailPlayerInfo: (matchId: number) =>
//     request.get(concatUrl(`/dota2/v1/matches/players_compared/${matchId}`)),
//   getDota2MatchDetailStatisticsInfo: (matchId: number) =>
//     request(concatUrl(`/dota2/v1/matches/statistics/${matchId}`)),

//   getDota2MatchLvingOverviewInfo: (boId: number) =>
//     request(concatUrl(`/dota2/v1/live/overview/${boId}`)),
//   getDota2MatchLvingGoldInfo: (boId: number) =>
//     request(concatUrl(`/dota2/v1/live/golddifference/${boId}`)),
//   getDota2MatchLvingItemGoldInfo: (boId: number) =>
//     request(concatUrl(`/dota2/v1/matches/live/items/${boId}`)),
//   getDota2MatchLvingXpInfo: (boId: number) => request(concatUrl(`/dota2/v1/live/xp/${boId}`)),
//   // 胜率曲线
//   getDota2MatchLvingRealTimeWinRateInfo: (boId: number) =>
//     request(concatUrl(`/dota2/v1/matches/get_realtime_winrate/${boId}`)),
//   getDota2MatchLvingHeroTimeWinRateInfo: (boId: number) =>
//     request(concatUrl(`/dota2/v1/matches/heros_time_winrate/${boId}`)),

//   //  解析数据
//   getDota2AnalysisData: ({ boId, type }: { boId: number; type: string }) =>
//     request(concatUrl(`/dota2/v1/matches/parser?match_id=${boId}&type=${type}`)),

//   //  战队相关

//   // 巡回赛列表
//   getDota2TeamDpc: () => request(concatUrl(`/team/v1/list/dpc`)),
//   // 战队列表
//   getDota2TeamList: ({
//     regionalId,
//     page,
//     size = 21,
//   }: {
//     regionalId: number;
//     page: number;
//     size: number;
//   }) => request(concatUrl(`/team/v1/list?regional_id=${regionalId}&page=${page}&size=${size}`)),

//   getDota2TeamOverview: (teamId: number) => request(concatUrl(`/team/v1/info/${teamId}`)),
//   getDota2TeamData: ({ teamId, type, status }: { teamId: number; type: string; status?: number }) =>
//     request(
//       concatUrl(
//         type !== 'teamsOdds'
//           ? `/team/v1/${Dota2TeamsDataEnum[type]}/${teamId}`
//           : `/team/v1/${Dota2TeamsDataEnum[type]}?team_id=${teamId}&status=${status}`
//       )
//     ),
//   getTeamPlayerData: (teamId: number) => request(concatUrl(`/team/v1/team_players_data/${teamId}`)),

//   getDota2PlayerList: ({ place, page, size = 21 }: { place: number; page: number; size: number }) =>
//     request(concatUrl(`/players/v1/list?place=${place}&page=${page}&size=${size}`)),
//   getDota2PlayerTransferList: ({ page, size = 21 }: { page: number; size: number }) =>
//     request(concatUrl(`/team/v1/list/transfer?page=${page}&size=${size}`)),

//   getDota2PlayerInfo: ({ accountId, type }: { accountId: number; type: Dota2PlayerDataEnum }) =>
//     request(concatUrl(`/players/v1/${Dota2PlayerDataEnum[type as any]}/${accountId}`)),
//   getDota2PlayerTransform: ({ accountId, type }: { accountId: number; type: string }) =>
//     request(concatUrl(`/players/v1/${Dota2PlayerDataEnum[type as any]}/${accountId}`)),

//   // 获取选手详情
//   getDota2PlayerOverview: (playerId: number) => request(concatUrl(`/players/v1/info/${playerId}`)),
//   // 获取选手最近战绩
//   getDota2PlayerMatchesData: (playerId: number) =>
//     request(concatUrl(`/players/v1/players_matches/${playerId}`)),
//   // 获取选手统计
//   getDota2PlayerStatData: (playerId: number) =>
//     request(concatUrl(`/players/v1/player_stat/${playerId}`)),
//   // 获取英雄统计
//   getDota2PlayerHeroesData: (playerId: number) =>
//     request(concatUrl(`/players/v1/heros_stat/${playerId}`)),
//   // 获取战队动态
//   getDota2TeamNewsData: (teamId: number) => request(concatUrl(`/team/v1/news/${teamId}`)),
//   // 获取战队最近比赛数据
//   getDota2TeamMatchesData: (teamId: number) =>
//     request(concatUrl(`/team/v1/team_matches/${teamId}`)),
//   // 获取战队选手统计数据
//   getDota2TeamPlayersData: (teamId: number) =>
//     request(concatUrl(`/team/v1/team_players_data/${teamId}`)),
//   // 获取战队英雄统计数据
//   getDota2TeamHerosData: (teamId: number) =>
//     request(concatUrl(`/team/v1/team_heros_data/${teamId}`)),
//   // 获取战队特殊数据
//   getDota2TeamSpecialData: (teamId: number) =>
//     request(concatUrl(`/team/v1/team_special_data/${teamId}`)),
//   // 获取战队指数数据
//   getDota2TeamOddsData: ({ teamId, status }) =>
//     request(concatUrl(`/team/v1/team_odds_data?team_id=${teamId}&status=${status}`)),
// };
