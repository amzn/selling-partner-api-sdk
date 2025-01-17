<?php
/**
 * DeliveryWindowTest
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
use OpenAPI\Client\Model\fulfillment\outbound\DeliveryWindow;

/**
 * DeliveryWindowTest Class Doc Comment
 *
 * @category    Class
 * @description The time range within which a Scheduled Delivery fulfillment order should be delivered. This is only available in the JP marketplace.
 * @package     OpenAPI\Client
 */
class DeliveryWindowTest extends TestCase
{

    private DeliveryWindow $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DeliveryWindow();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DeliveryWindow"
     */
    public function testDeliveryWindow()
    {
        $this->assertInstanceOf(DeliveryWindow::class, $this->model);
    }

    /**
     * Test attribute "start_date"
     */
    public function testPropertyStartDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setStartDate($testValue);
        $this->assertEquals($testValue, $this->model->getStartDate());
    }

    /**
     * Test attribute "end_date"
     */
    public function testPropertyEndDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setEndDate($testValue);
        $this->assertEquals($testValue, $this->model->getEndDate());
    }
}
