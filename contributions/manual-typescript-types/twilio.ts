
export interface TwilioRoomHiddenInfo {
  _clientTrackSwitchOffControl: string // "auto"
  _contentPreferencesMode: string // "auto"
  _eventsCount: number
  _instanceId: number
  _maxListeners: number
  _options: { wsServer: string, automaticSubscription: boolean, dominantSpeaker: boolean }
  _signaling: {
    _transport: {
      _peerConnectionManager: {
        _peerConnections: Map<string, PeerConnectionV2>
      }
    }
  }
}

export type TwilioRoom = Object

/*
_clientTrackSwitchOffControl: "auto"
_contentPreferencesMode: "auto"
_events: {disconnected: Array(6), trackPublished: Array(11), reconnected: Array(3), reconnecting: Array(3), participantDisconnected: Array(21), …}
_eventsCount: 11
_instanceId: 1
_log: Log {_component: Room, _logLevels: {…}, _warnings: Set(0), …}
_maxListeners: 100
_options: {eventObserver: EventObserver, wsServer: 'wss://global.vss.twilio.com/signaling', automaticSubscription: true, dominantSpeaker: true, createLocalTracks: ƒ, …}
_participants: Map(0) {size: 0}
_signaling: RoomV2 {_events: {…}, _eventsCount: 6, _maxListeners: undefined, …}
get dominantSpeaker: ƒ ()
get isRecording: ƒ ()
get state: ƒ ()
[[Prototype]]: _class
*/

/*
Map of PeerConnectionV2 object:
// _signaling._transport._peerConnectionManager._peerConnections
*/

// _peerConnection has ChromeRTCPeerConnection which seems to be same as RTCPeerConnection.
export interface PeerConnectionV2 {
  isLocked: boolean
  _eventsCount: number
  _maxListeners: number|undefined
  // _appliedTrackIdsToAttributes: Map(1) {'d30cf71f-430e-4687-92c4-44fea96cd001' => TrackAttributes}
  // _dataChannels: Map(1) {DataTrackSender => RTCDataChannel}
  // _dataTrackReceivers: Set(5) {DataTrackReceiver, DataTrackReceiver, DataTrackReceiver, DataTrackReceiver, DataTrackReceiver}
  _descriptionRevision: number
  _didGenerateLocalCandidates: boolean
  _enableDscp: boolean
  _iceConnectionMonitor: {_activityCheckPeriodMs: number, _inactivityThresholdMs: number, _timer: number } // IceConnectionMonitor {_activityCheckPeriodMs: 1000, _inactivityThresholdMs: 3000, _lastActivity: null, _peerConnection: ChromeRTCPeerConnection, _timer: 91, …}
  _iceGatheringFailed: boolean
  _isIceConnectionInactive: boolean
  _isIceLite: boolean
  _isIceRestartBackoffInProgress: boolean
  _isRTCRtpSenderParamsSupported: boolean
  _isRestartingIce: boolean
  _isUnifiedPlan: boolean
  _lastIceConnectionState: string // "connected"
  _lastStableDescriptionRevision: number
  // _localCandidates: (3) [RTCIceCandidate, RTCIceCandidate, RTCIceCandidate]
  _localCandidatesRevision: number
  // _localCodecs: Set(14) {'opus', 'red', 'isac', 'g722', 'pcmu', …}
  // _localDescription: ChromeRTCSessionDescription {sdp: 'v=0\r\no=- 297276598648129044 2 IN IP4 127.0.0.1\r\ns=…:2\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n', type: 'offer'}
  // _localDescriptionWithoutSimulcast: {type: 'offer', sdp: 'v=0\r\no=- 297276598648129044 2 IN IP4 127.0.0.1\r\ns=…:2\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n'}
  _localUfrag: string // "MhzO"
  _needsAnswer: boolean
  _negotiationRole: string // "offerer"
  _offerOptions: {offerToReceiveAudio: boolean, offerToReceiveVideo: boolean}
  // _peerConnection: ChromeRTCPeerConnection {…} // Handle RTCPeerConnection
  // _preferredAudioCodecs: []
  // _preferredVideoCodecs: [{…}]
  // _queuedDescription: null
  // _rtpSenders: Map(2) {MediaTrackSender => RTCRtpSender, MediaTrackSender => RTCRtpSender}
  _sdpFormat: string // "unified"
  _shouldApplyDtx: boolean
  _shouldApplySimulcast: boolean
  _shouldOffer: boolean
  _shouldRestartIce: boolean
}

export default {}
