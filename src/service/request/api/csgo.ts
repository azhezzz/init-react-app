export default {};
// import request from '../request';
// import path from '../path';
// import { LeagueStatusEnum } from '../../../utils/constants';

// const baseUrl = path.csgo;
// const urlReg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
// function concatUrl(url: string) {
//   if (urlReg.test(url)) return url;
//   return `${baseUrl}${url}`;
// }

// export default {
//   getLeagueListForCsgo: ({ status = LeagueStatusEnum.RECENT, page = 1 }) =>
//     request(concatUrl('/csgo/v1/leagues/list'), { params: { status, page } }), // 获取联赛信息列表
//   getOddsStatisticsForCsgo: () => request(concatUrl('/csgo/v1/leagues/odds_winrate')), // 获取指数统计
//   getMapStatisticsForCsgo: () => request(concatUrl('/csgo/v1/leagues/league_map_info')), // 获取地图统计
//   getLeagueInfoForCsgo: (leagueId: number) =>
//     request(concatUrl(`/csgo/v1/leagues/info/${leagueId}`)), // 获取联赛基本信息
//   getLeaguePartitionForCsgo: (zoneId: number) =>
//     request(concatUrl(`https://api.csgo.esportseyes.com/csgo/v1/leagues/partition/${zoneId}`)),
//   getLeagueSchedulesForCsgo: (zoneId: number) =>
//     request(
//       concatUrl(`https://api.csgo.esportseyes.com/csgo/v1/leagues/partition_schedule/${zoneId}`)
//     ),

//   getCsgoPlayerList: ({ place, page, size = 21 }) => {
//     if (Number(place) === 9) {
//       return request(concatUrl(`/hawkeyepc/v1/players/get_player_list/${page}`));
//     }
//     return request(concatUrl(`/hawkeyepc/v1/players/get_partition_player_list/${place}/${page}`));
//   },
//   getCsgoPlayerTransferList: ({ page, size = 21 }: { page: number; size: number }) =>
//     request(concatUrl(`/hawkeyepc/v1/players/get_player_transfer/${page}`)),
//   getCsgoTeamList: ({ regionalId, page, size = 21 }) => {
//     if (Number(regionalId) === 9) {
//       return request(concatUrl(`/hawkeyepc/v1/teams/get_team_list/${page}`));
//     }
//     return request(concatUrl(`/hawkeyepc/v1/teams/get_partition_team_list/${regionalId}/${page}`));
//   },
//   getCsgoTeamOverview: (teamId: number) =>
//     request(concatUrl(`/hawkeyepc/v1/teams/get_team_info/${teamId}`)),
//   getCsgoTeamDpc: () => request(concatUrl(`/hawkeyepc/v1/teams/world_match_team_list`)),
//   // 获取选手详情
//   getCsgoPlayerOverview: playerId =>
//     request(concatUrl(`/hawkeyepc/v1/players/get_player_info/${playerId}`)),
//   // 获取选手最近比赛
//   getCsgoPlayerMatchesData: playerId =>
//     request(concatUrl(`/hawkeyepc/v1/players/get_recent_match_list/${playerId}`)),
//   // 获取选手统计
//   getCsgoPlayerStatData: (playerId: number) =>
//     request(concatUrl(`/hawkeyepc/v1/players/get_player_stats/${playerId}`)),
//   // 获取地图统计
//   getCsgoPlayerMapsData: (playerId: number) =>
//     request(concatUrl(`/hawkeyepc/v1/players/get_map_stats/${playerId}`)),
//   // 获取战队动态
//   getCsgoTeamNewsData: (teamId: number) =>
//     request(concatUrl(`/hawkeyepc/v1/teams/get_team_dynamic/${teamId}`)),
//   // 获取战队荣耀
//   getCsgoTeamHonour: (teamId: number) =>
//     request(concatUrl(`/hawkeyepc/v1/teams/get_team_champion_list/${teamId}`)),
//   // 获取战队最近比赛数据
//   getCsgoTeamMatchesData: (teamId: number) =>
//     request(concatUrl(`/hawkeyepc/v1/teams/get_recent_match_list/${teamId}`)),
//   // 获取战队最近比赛数据
//   getCsgoTeamPlayersData: (teamId: number) =>
//     request(concatUrl(`/hawkeyepc/v1/teams/get_player_stats/${teamId}`)),
//   // 获取战队地图数据
//   getCsgoTeamMapsData: (teamId: number) =>
//     request(concatUrl(`/hawkeyepc/v1/teams/get_map_stats/${teamId}`)),
//   // 获取战队特殊数据
//   getCsgoTeamSpecialData: (teamId: number) =>
//     request(concatUrl(`/hawkeyepc/v1/teams/get_special_stats/${teamId}`)),
//   // 获取战队指数数据
//   getCsgoTeamOddsData: (teamId: number) =>
//     request(concatUrl(`/hawkeyepc/v1/teams/get_odds_stats/${teamId}`)),
//   // =====================详情页
//   getCsgoMatchDetailInfo: (matchId: number) =>
//     request(concatUrl(`/csgo/v1/matches/info/${matchId}`)),
//   getCsgoMatchDetailTeamInfo: (matchId: number) =>
//     request(concatUrl(`/csgo/v1/matches/teams_compared/${matchId}`)),
//   getCsgoMatchDetailPlayerInfo: (matchId: number) =>
//     request(concatUrl(`/csgo/v1/matches/players_compared/${matchId}`)),
//   getCsgoMatchDetailStatisticsInfo: (matchId: number) =>
//     request(concatUrl(`/csgo/v1/matches/statistic/${matchId}`)),
//   getCsgoMatchLiveInfo: ({ matchId, mapName }: { matchId: number; mapName: string }) =>
//     request(concatUrl(`/csgo/v1/matches/detail_info?match_id=${matchId}&map_name=${mapName}`)),
//   getCsgoMatchLogInfo: ({ matchId }: { matchId: number }) =>
//     request(concatUrl(`/csgo/v1/matches/logs/${matchId}`)),
//   getCsgoMatchGold: ({ matchId, mapName }: { matchId: number; mapName: string }) =>
//     request(concatUrl(`/csgo/v1/matches/gold?match_id=${matchId}&map_name=${mapName}`)),
//   getCsgoMatchWinRate: ({ matchId, mapName }: { matchId: number; mapName: string }) =>
//     request(concatUrl(`/csgo/v1/matches/win_rate?match_id=${matchId}&map_name=${mapName}`)),
//   // csgo 深度分析
//   getCsgoParserInfo: ({
//     matchId,
//     mapName,
//     type,
//   }: {
//     matchId: number;
//     mapName: string;
//     type: string;
//   }) =>
//     request(
//       `https://api.csgo.esportseyes.com/api/v1/parser/get_format_parser_info?seriesId=${matchId}&map=${mapName}&type=${type}`
//     ),
// };
