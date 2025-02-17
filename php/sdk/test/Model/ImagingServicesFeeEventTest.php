<?php
/**
 * ImagingServicesFeeEventTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\finances\v0\ImagingServicesFeeEvent;

/**
 * ImagingServicesFeeEventTest Class Doc Comment
 *
 * @category    Class
 * @description A fee event related to Amazon Imaging services.
 * @package     SpApi
 */
class ImagingServicesFeeEventTest extends TestCase
{

    private ImagingServicesFeeEvent $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ImagingServicesFeeEvent();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ImagingServicesFeeEvent"
     */
    public function testImagingServicesFeeEvent()
    {
        $this->assertInstanceOf(ImagingServicesFeeEvent::class, $this->model);
    }

    /**
     * Test attribute "imaging_request_billing_item_id"
     */
    public function testPropertyImagingRequestBillingItemId()
    {
        $testValue = 'test';
        
        $this->model->setImagingRequestBillingItemId($testValue);
        $this->assertEquals($testValue, $this->model->getImagingRequestBillingItemId());
    }

    /**
     * Test attribute "asin"
     */
    public function testPropertyAsin()
    {
        $testValue = 'test';
        
        $this->model->setAsin($testValue);
        $this->assertEquals($testValue, $this->model->getAsin());
    }

    /**
     * Test attribute "posted_date"
     */
    public function testPropertyPostedDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setPostedDate($testValue);
        $this->assertEquals($testValue, $this->model->getPostedDate());
    }

    /**
     * Test attribute "fee_list"
     */
    public function testPropertyFeeList()
    {
        $testValue = [];
        
        $this->model->setFeeList($testValue);
        $this->assertEquals($testValue, $this->model->getFeeList());
    }
}
