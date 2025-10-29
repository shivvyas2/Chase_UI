import { IconSymbol } from '@/components/ui/icon-symbol';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AlertsScreen() {
  const alerts = [
    {
      id: 1,
      type: 'address',
      title: 'Address change',
      subtitle: '',
      date: '10/10/2025',
      unread: false,
      icon: 'bookmark',
    },
    {
      id: 2,
      type: 'new_card',
      title: 'New bank/credit card',
      subtitle: 'JPMCB CARD',
      date: '09/29/2025',
      unread: true,
      icon: 'creditcard',
    },
    {
      id: 3,
      type: 'credit_inquiry',
      title: 'New credit inquiry',
      subtitle: 'JPMCB CARD SERVICES',
      date: '09/28/2025',
      unread: true,
      icon: 'megaphone',
    },
    {
      id: 4,
      type: 'over_limit',
      title: 'Card over limit',
      subtitle: 'ZOLVE/CONTINENTAL BANK',
      date: '09/21/2025',
      unread: true,
      icon: 'exclamationmark.triangle',
    },
    {
      id: 5,
      type: 'over_limit',
      title: 'Card over limit',
      subtitle: 'APPLE CARD/GS BANK USA',
      date: '09/07/2025',
      unread: false,
      icon: 'exclamationmark.triangle',
    },
    {
      id: 6,
      type: 'credit_inquiry',
      title: 'New credit inquiry',
      subtitle: 'JPMCB CARD SERVICES',
      date: '08/28/2025',
      unread: false,
      icon: 'megaphone',
    },
    {
      id: 7,
      type: 'address',
      title: 'Address change',
      subtitle: '',
      date: '08/20/2025',
      unread: false,
      icon: 'bookmark',
    },
    {
      id: 8,
      type: 'over_limit',
      title: 'Card over limit',
      subtitle: 'DISCOVERC',
      date: '08/19/2025',
      unread: false,
      icon: 'exclamationmark.triangle',
    },
    {
      id: 9,
      type: 'ssn',
      title: 'Social Security number',
      subtitle: '',
      date: '06/24/2025',
      unread: false,
      icon: 'shield',
    },
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case 'address':
        return '#0066CC';
      case 'new_card':
        return '#0066CC';
      case 'credit_inquiry':
        return '#0066CC';
      case 'over_limit':
        return '#FF4444';
      case 'ssn':
        return '#0066CC';
      default:
        return '#0066CC';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1A237E" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <IconSymbol name="chevron.left" size={24} color="white" />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Chase Business Credit Journey</Text>
        
        <TouchableOpacity style={styles.moreButton}>
          <IconSymbol name="ellipsis" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Navigation Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Credit</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.activeTab}>
          <Text style={styles.activeTabText}>Alerts (3)</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Offers</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.contentTitle}>Alert Inbox</Text>
        
        <ScrollView style={styles.alertsList}>
          {alerts.map((alert, index) => (
            <TouchableOpacity key={alert.id} style={styles.alertItem}>
              <View style={styles.alertLeft}>
                <View style={styles.alertIcon}>
                  <IconSymbol 
                    name={alert.icon as any} 
                    size={20} 
                    color={getIconColor(alert.type)} 
                  />
                </View>
                <View style={styles.alertContent}>
                  <Text style={styles.alertTitle}>{alert.title}</Text>
                  {alert.subtitle ? (
                    <Text style={styles.alertSubtitle}>{alert.subtitle}</Text>
                  ) : null}
                </View>
              </View>
              
              <View style={styles.alertRight}>
                {alert.unread && (
                  <View style={styles.unreadBadge}>
                    <Text style={styles.unreadText}>Unread</Text>
                  </View>
                )}
                <Text style={styles.alertDate}>{alert.date}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A237E',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  moreButton: {
    padding: 8,
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 16,
    alignItems: 'center',
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#0066CC',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 20,
  },
  tabText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  activeTabText: {
    color: '#0066CC',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  contentTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
  },
  alertsList: {
    flex: 1,
  },
  alertItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  alertLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  alertIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0F8FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  alertContent: {
    flex: 1,
  },
  alertTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 4,
  },
  alertSubtitle: {
    fontSize: 14,
    color: '#666666',
  },
  alertRight: {
    alignItems: 'flex-end',
  },
  unreadBadge: {
    backgroundColor: '#E6F3FF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 4,
  },
  unreadText: {
    fontSize: 12,
    color: '#0066CC',
    fontWeight: '500',
  },
  alertDate: {
    fontSize: 14,
    color: '#666666',
  },
});
