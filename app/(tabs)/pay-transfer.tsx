import { IconSymbol } from '@/components/ui/icon-symbol';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PayTransferScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton}>
          <View style={styles.walletIcon}>
            <IconSymbol name="creditcard" size={20} color="#0066CC" />
            <View style={styles.plusOverlay}>
              <IconSymbol name="plus" size={12} color="#0066CC" />
            </View>
          </View>
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
      <View style={styles.quickActionsContainer}>
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
      </View>

      {/* Pay & Transfer Section */}
      <ScrollView style={styles.payTransferSection} showsVerticalScrollIndicator={false}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Pay & Transfer</Text>
          <TouchableOpacity>
            <IconSymbol name="ellipsis" size={20} color="#999999" />
          </TouchableOpacity>
        </View>

        {/* Quick Actions Card */}
        <View style={styles.featureCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Quick Actions</Text>
          </View>
          <View style={styles.cardContent}>
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="arrow.up.right" size={24} color="#0066CC" />
              <Text style={styles.featureText}>Send money</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="arrow.down.left" size={24} color="#0066CC" />
              <Text style={styles.featureText}>Request money</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="arrow.left.arrow.right" size={24} color="#0066CC" />
              <Text style={styles.featureText}>Transfer between accounts</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="creditcard" size={24} color="#0066CC" />
              <Text style={styles.featureText}>Pay credit card</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Bill Pay Card */}
        <View style={styles.featureCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Bill Pay</Text>
          </View>
          <View style={styles.cardContent}>
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="doc.text" size={24} color="#0066CC" />
              <Text style={styles.featureText}>Pay bills</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="plus" size={24} color="#0066CC" />
              <Text style={styles.featureText}>Add payee</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="calendar" size={24} color="#0066CC" />
              <Text style={styles.featureText}>Schedule payments</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Transactions Card */}
        <View style={styles.featureCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Recent Transactions</Text>
          </View>
          <View style={styles.cardContent}>
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="arrow.up.right" size={24} color="#00AA00" />
              <View style={styles.transactionInfo}>
                <Text style={styles.transactionText}>Sent to John Doe</Text>
                <Text style={styles.transactionDate}>Today, 2:30 PM</Text>
              </View>
              <Text style={styles.transactionAmount}>-$150.00</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="arrow.down.left" size={24} color="#0066CC" />
              <View style={styles.transactionInfo}>
                <Text style={styles.transactionText}>Deposit from ABC Corp</Text>
                <Text style={styles.transactionDate}>Yesterday, 9:15 AM</Text>
              </View>
              <Text style={styles.transactionAmount}>+$2,500.00</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="creditcard" size={24} color="#FF6B35" />
              <View style={styles.transactionInfo}>
                <Text style={styles.transactionText}>Credit card payment</Text>
                <Text style={styles.transactionDate}>2 days ago</Text>
              </View>
              <Text style={styles.transactionAmount}>-$89.50</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Scheduled Payments Card */}
        <View style={styles.featureCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Scheduled Payments</Text>
          </View>
          <View style={styles.cardContent}>
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="calendar" size={24} color="#0066CC" />
              <View style={styles.transactionInfo}>
                <Text style={styles.transactionText}>Electric Bill - ConEd</Text>
                <Text style={styles.transactionDate}>Due Dec 15, 2024</Text>
              </View>
              <Text style={styles.transactionAmount}>$125.30</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="calendar" size={24} color="#0066CC" />
              <View style={styles.transactionInfo}>
                <Text style={styles.transactionText}>Internet Bill - Verizon</Text>
                <Text style={styles.transactionDate}>Due Dec 20, 2024</Text>
              </View>
              <Text style={styles.transactionAmount}>$79.99</Text>
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
  walletIcon: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusOverlay: {
    position: 'absolute',
    top: -2,
    right: -2,
    backgroundColor: 'white',
    borderRadius: 8,
    width: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#0066CC',
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
  quickActionsContainer: {
    paddingHorizontal: 20,
    marginBottom: 0,
  },
  quickActions: {
    flexDirection: 'row',
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
  payTransferSection: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 0,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
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
  transactionInfo: {
    flex: 1,
    marginLeft: 16,
  },
  transactionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
  transactionDate: {
    fontSize: 14,
    color: '#666666',
    marginTop: 2,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
});

