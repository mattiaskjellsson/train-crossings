export function crossingsFetcher(latitude, longitude, distance) {
  const haversineInKM = (lat1, long1, lat2, long2) => {
    const _eQuatorialEarthRadius = 6378.1370;
    const _d2r = (Math.PI / 180.0);
    const dlng = (long2 - long1) * _d2r;
    const dlat = (lat2 - lat1) * _d2r;
    const a = Math.pow(Math.sin(dlat / 2.0), 2.0) + Math.cos(lat1 * _d2r) * Math.cos(lat2 * _d2r) * Math.pow(Math.sin(dlng / 2.0), 2.0);
    const c = 2.0 * Math.atan2(Math.sqrt(a), Math.sqrt(1.0 - a));
    const d = _eQuatorialEarthRadius * c;
    return d;
  }

  const crossings = [
    {'lat': -8.498200, 'lng': 115.247316},
    {'lat': -8.501511, 'lng': 115.246586},
    {'lat': -8.501660, 'lng': 115.247809},
    {'lat': -8.503867, 'lng': 115.247616},
    {'lat': -8.503845, 'lng': 115.244247},
    {'lat': -8.503930, 'lng': 115.249419},
    {'lat': -8.507708, 'lng': 115.247731},
    {'lat': -8.506236, 'lng': 115.251135},
    {'lat': -8.506378, 'lng': 115.252480},
    {'lat': -8.504963, 'lng': 115.254568},
    {'lat': -8.497267, 'lng': 115.253224},
    {'lat': -8.487109, 'lng': 115.253853},
    {'lat': -8.505126, 'lng': 115.257722},
    {'lat': -8.505664, 'lng': 115.259238},
    {'lat': -8.511124, 'lng': 115.258237},
    {'lat': -8.516886, 'lng': 115.258015},
    {'lat': -8.519857, 'lng': 115.258916},
    {'lat': -8.517883, 'lng': 115.263326},
  ];

  const closeCrossings = crossings.filter((crossing) => {
    const d = haversineInKM(latitude, longitude, crossing.lat, crossing.lng);
    return d < distance;
  });

  return closeCrossings;
}