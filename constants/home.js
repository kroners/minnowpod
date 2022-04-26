const podName = {
  'Angela': {
    podOnlineStatus: true,
  },
  'Catherine': {
    podOnlineStatus: false,
  },
  'Brittany': {
    podOnlineStatus: true,
  },
  'Diasy': {
    podOnlineStatus: true,
  }
};

export const home = {
  user: {
    name: 'John',
  },
  pod: {
    'locationA': podName,
    'locationB': podName,
    'locationC': podName,
    'locationD': podName,
    'locationE': podName,
  },
  stats: {
    totalDeliveries: {
      title: 'Total Deliveries',
      value: 38,
      bgColor: '#0591A3',
      improvement: 25,
    },
    totalTimeInPod: {
      title: 'Total Time In Pod',
      value: 748,
      bgColor: '#498D84',
      improvement: 48,
    },
    totalUsers: {
      title: 'Total Users',
      value: 1552,
      bgColor: '#4FCCDB',
      improvement: 17,
    },
  }
}