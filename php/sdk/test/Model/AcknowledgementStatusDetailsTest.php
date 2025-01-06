<?php
/**
 * AcknowledgementStatusDetailsTest
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
use OpenAPI\Client\Model\vendorOrders\AcknowledgementStatusDetails;

/**
 * AcknowledgementStatusDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Details of item quantity ordered
 * @package     OpenAPI\Client
 */
class AcknowledgementStatusDetailsTest extends TestCase
{

    private AcknowledgementStatusDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AcknowledgementStatusDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AcknowledgementStatusDetails"
     */
    public function testAcknowledgementStatusDetails()
    {
        $this->assertInstanceOf(AcknowledgementStatusDetails::class, $this->model);
    }

    /**
     * Test attribute "acknowledgement_date"
     */
    public function testPropertyAcknowledgementDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setAcknowledgementDate($testValue);
        $this->assertEquals($testValue, $this->model->getAcknowledgementDate());
    }

    /**
     * Test attribute "accepted_quantity"
     */
    public function testPropertyAcceptedQuantity()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendorOrders\ItemQuantity();
        
        $this->model->setAcceptedQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getAcceptedQuantity());
    }

    /**
     * Test attribute "rejected_quantity"
     */
    public function testPropertyRejectedQuantity()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendorOrders\ItemQuantity();
        
        $this->model->setRejectedQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getRejectedQuantity());
    }
}
