import { IconSymbol } from '@/components/ui/icon-symbol';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MoreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton}>
          <IconSymbol name="plus" size={28} color="#0066CC" />
        </TouchableOpacity>
        
        <View style={styles.logoContainer}>
          <View style={styles.chaseLogo}>
            <View style={styles.logoInner} />
          </View>
        </View>
        
        <TouchableOpacity style={styles.headerButton}>
          <IconSymbol name="person.circle.fill" size={28} color="#0066CC" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Text style={styles.searchPlaceholder}>What are you looking for?</Text>
        </View>
        <TouchableOpacity style={styles.helpButton}>
          <IconSymbol name="questionmark" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Quick Actions */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.quickActions}>
        <TouchableOpacity style={styles.actionButton}>
          <IconSymbol name="plus" size={16} color="#0066CC" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Send | Zelle®</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Deposit checks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Pay bills</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Content */}
      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>More</Text>
        
        <View style={styles.featureCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Account Settings</Text>
          </View>
          <View style={styles.cardContent}>
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="person" size={24} color="#0066CC" />
              <Text style={styles.featureText}>Profile settings</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="bell" size={24} color="#0066CC" />
              <Text style={styles.featureText}>Notifications</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="lock" size={24} color="#0066CC" />
              <Text style={styles.featureText}>Security settings</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="creditcard" size={24} color="#0066CC" />
              <Text style={styles.featureText}>Card management</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.featureCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Support</Text>
          </View>
          <View style={styles.cardContent}>
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="questionmark.circle" size={24} color="#0066CC" />
              <Text style={styles.featureText}>Help center</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="phone" size={24} color="#0066CC" />
              <Text style={styles.featureText}>Contact us</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="message" size={24} color="#0066CC" />
              <Text style={styles.featureText}>Live chat</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="location" size={24} color="#0066CC" />
              <Text style={styles.featureText}>Find branches</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.featureCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Benefits & Travel</Text>
          </View>
          <View style={styles.cardContent}>
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="airplane" size={24} color="#0066CC" />
              <Text style={styles.featureText}>Travel portal</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="star" size={24} color="#0066CC" />
              <Text style={styles.featureText}>Rewards points</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="gift" size={24} color="#0066CC" />
              <Text style={styles.featureText}>Card benefits</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.featureCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Plan & Track</Text>
          </View>
          <View style={styles.cardContent}>
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="chart.bar" size={24} color="#0066CC" />
              <Text style={styles.featureText}>Spending insights</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="target" size={24} color="#0066CC" />
              <Text style={styles.featureText}>Savings goals</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="calendar" size={24} color="#0066CC" />
              <Text style={styles.featureText}>Budget tracking</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.featureCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Business Services</Text>
          </View>
          <View style={styles.cardContent}>
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="building.2" size={24} color="#0066CC" />
              <Text style={styles.featureText}>Business banking</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="chart.line.uptrend.xyaxis" size={24} color="#0066CC" />
              <Text style={styles.featureText}>Business insights</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="doc.text" size={24} color="#0066CC" />
              <Text style={styles.featureText}>Business reports</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.featureCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Legal & Privacy</Text>
          </View>
          <View style={styles.cardContent}>
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="doc" size={24} color="#0066CC" />
              <Text style={styles.featureText}>Terms of service</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="lock.shield" size={24} color="#0066CC" />
              <Text style={styles.featureText}>Privacy policy</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="info.circle" size={24} color="#0066CC" />
              <Text style={styles.featureText}>About Chase</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: 'white',
  },
  headerButton: {
    padding: 12,
    borderRadius: 8,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  chaseLogo: {
    width: 44,
    height: 44,
    backgroundColor: '#0066CC',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  logoInner: {
    width: 24,
    height: 24,
    backgroundColor: 'white',
    borderRadius: 2,
    transform: [{ rotate: '45deg' }],
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  searchBar: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginRight: 16,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  searchPlaceholder: {
    color: '#8E8E93',
    fontSize: 17,
    fontWeight: '400',
  },
  helpButton: {
    padding: 12,
    backgroundColor: '#0066CC',
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quickActions: {
    paddingHorizontal: 20,
    marginBottom: 0,
  },
  actionButton: {
    backgroundColor: 'white',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 60,
    height: 32,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 1,
    elevation: 1,
  },
  actionText: {
    fontSize: 11,
    fontWeight: '500',
    color: '#1C1C1E',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 0,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 16,
  },
  featureCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  cardHeader: {
    backgroundColor: '#0066CC',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  cardHeaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  cardContent: {
    padding: 16,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  featureText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    marginLeft: 16,
  },
});

