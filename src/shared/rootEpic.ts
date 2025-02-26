/*
 * Copyright (c) "Neo4j"
 * Neo4j Sweden AB [http://neo4j.com]
 *
 * This file is part of Neo4j.
 *
 * Neo4j is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import { combineEpics } from 'redux-observable'
import {
  handleCommandEpic,
  handleSingleCommandEpic,
  postConnectCmdEpic,
  fetchGuideFromAllowlistEpic
} from './modules/commands/commandsDuck'
import {
  retainCredentialsSettingsEpic,
  connectEpic,
  disconnectEpic,
  startupConnectEpic,
  disconnectSuccessEpic,
  verifyConnectionCredentialsEpic,
  startupConnectionSuccessEpic,
  startupConnectionFailEpic,
  detectActiveConnectionChangeEpic,
  connectionLostEpic,
  switchConnectionEpic,
  switchConnectionSuccessEpic,
  switchConnectionFailEpic,
  initialSwitchConnectionFailEpic,
  silentDisconnectEpic,
  useDbEpic
} from './modules/connections/connectionsDuck'
import {
  dbMetaEpic,
  serverConfigEpic,
  serverInfoEpic,
  clearMetaOnDisconnectEpic
} from './modules/dbMeta/dbMetaDuck'
import { cancelRequestEpic } from './modules/requests/requestsDuck'
import {
  discoveryOnStartupEpic,
  injectDiscoveryEpic
} from './modules/discovery/discoveryDuck'
import { clearLocalstorageEpic } from './modules/localstorage/localstorageDuck'
import {
  initializeCypherEditorEpic,
  populateEditorFromUrlEpic,
  updateEditorSupportSchemaEpic
} from './modules/editor/editorDuck'
import {
  adHocCypherRequestEpic,
  routedCypherRequestEpic,
  cypherRequestEpic,
  clusterCypherRequestEpic,
  handleForcePasswordChangeEpic
} from './modules/cypher/cypherDuck'
import {
  featuresDiscoveryEpic,
  clearOnDisconnectEpic
} from './modules/features/featuresDuck'
import {
  syncItemsEpic,
  clearSyncEpic,
  syncFavoritesEpic,
  loadFavoritesFromSyncEpic,
  loadGrassFromSyncEpic,
  loadFoldersFromSyncEpic,
  syncFoldersEpic,
  syncGrassEpic
} from './modules/sync/syncDuck'
import { credentialsTimeoutEpic } from './modules/credentialsPolicy/credentialsPolicyDuck'
import {
  bootEpic,
  incrementEventEpic,
  udcStartupEpic,
  trackSyncLogoutEpic,
  trackConnectsEpic,
  eventFiredEpic,
  trackCommandUsageEpic,
  trackErrorFramesEpic,
  trackReduxActionsEpic
} from './modules/udc/udcDuck'
import { ensureMaxFramesEpic } from './modules/frames/framesDuck'
import {
  getCurrentUserEpic,
  clearCurrentUserOnDisconnectEpic
} from './modules/currentUser/currentUserDuck'

export default combineEpics(
  handleCommandEpic,
  handleSingleCommandEpic,
  postConnectCmdEpic,
  fetchGuideFromAllowlistEpic,
  connectionLostEpic,
  switchConnectionEpic,
  switchConnectionSuccessEpic,
  switchConnectionFailEpic,
  initialSwitchConnectionFailEpic,
  retainCredentialsSettingsEpic,
  connectEpic,
  disconnectEpic,
  silentDisconnectEpic,
  useDbEpic,
  startupConnectEpic,
  disconnectSuccessEpic,
  verifyConnectionCredentialsEpic,
  startupConnectionSuccessEpic,
  startupConnectionFailEpic,
  detectActiveConnectionChangeEpic,
  dbMetaEpic,
  serverConfigEpic,
  serverInfoEpic,
  clearMetaOnDisconnectEpic,
  cancelRequestEpic,
  discoveryOnStartupEpic,
  injectDiscoveryEpic,
  populateEditorFromUrlEpic,
  adHocCypherRequestEpic,
  routedCypherRequestEpic,
  cypherRequestEpic,
  clusterCypherRequestEpic,
  clearLocalstorageEpic,
  handleForcePasswordChangeEpic,
  featuresDiscoveryEpic,
  clearOnDisconnectEpic,
  syncFavoritesEpic,
  loadFavoritesFromSyncEpic,
  loadGrassFromSyncEpic,
  syncItemsEpic,
  clearSyncEpic,
  loadFoldersFromSyncEpic,
  syncFoldersEpic,
  syncGrassEpic,
  credentialsTimeoutEpic,
  bootEpic,
  udcStartupEpic,
  incrementEventEpic,
  trackSyncLogoutEpic,
  trackConnectsEpic,
  eventFiredEpic,
  ensureMaxFramesEpic,
  getCurrentUserEpic,
  clearCurrentUserOnDisconnectEpic,
  trackCommandUsageEpic,
  trackErrorFramesEpic,
  trackReduxActionsEpic,
  initializeCypherEditorEpic,
  updateEditorSupportSchemaEpic
)
