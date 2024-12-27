<?php
/**
 * CollectFreightPickupDetailsTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\vendor.shipments\CollectFreightPickupDetails;

/**
 * CollectFreightPickupDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Transport Request pickup date from Vendor Warehouse by Buyer
 * @package     OpenAPI\Client
 */
class CollectFreightPickupDetailsTest extends TestCase
{

    private CollectFreightPickupDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CollectFreightPickupDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CollectFreightPickupDetails"
     */
    public function testCollectFreightPickupDetails()
    {
        $this->assertInstanceOf(CollectFreightPickupDetails::class, $this->model);
    }

    /**
     * Test attribute "requested_pick_up"
     */
    public function testPropertyRequestedPickUp()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setRequestedPickUp($testValue);
        $this->assertEquals($testValue, $this->model->getRequestedPickUp());
    }

    /**
     * Test attribute "scheduled_pick_up"
     */
    public function testPropertyScheduledPickUp()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setScheduledPickUp($testValue);
        $this->assertEquals($testValue, $this->model->getScheduledPickUp());
    }

    /**
     * Test attribute "carrier_assignment_date"
     */
    public function testPropertyCarrierAssignmentDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setCarrierAssignmentDate($testValue);
        $this->assertEquals($testValue, $this->model->getCarrierAssignmentDate());
    }
}
