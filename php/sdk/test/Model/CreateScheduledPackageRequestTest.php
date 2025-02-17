<?php
/**
 * CreateScheduledPackageRequestTest
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
use SpApi\Model\easyship\v2022_03_23\CreateScheduledPackageRequest;

/**
 * CreateScheduledPackageRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for the &#x60;createScheduledPackage&#x60; operation.
 * @package     SpApi
 */
class CreateScheduledPackageRequestTest extends TestCase
{

    private CreateScheduledPackageRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateScheduledPackageRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateScheduledPackageRequest"
     */
    public function testCreateScheduledPackageRequest()
    {
        $this->assertInstanceOf(CreateScheduledPackageRequest::class, $this->model);
    }

    /**
     * Test attribute "amazon_order_id"
     */
    public function testPropertyAmazonOrderId()
    {
        $testValue = 'test';
        
        $this->model->setAmazonOrderId($testValue);
        $this->assertEquals($testValue, $this->model->getAmazonOrderId());
    }

    /**
     * Test attribute "marketplace_id"
     */
    public function testPropertyMarketplaceId()
    {
        $testValue = 'test';
        
        $this->model->setMarketplaceId($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceId());
    }

    /**
     * Test attribute "package_details"
     */
    public function testPropertyPackageDetails()
    {
        
        $testValue = new \SpApi\Model\easyship\v2022_03_23\PackageDetails();
        
        $this->model->setPackageDetails($testValue);
        $this->assertEquals($testValue, $this->model->getPackageDetails());
    }
}
