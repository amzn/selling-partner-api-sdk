<?php
/**
 * UpdateScheduledPackagesRequestTest
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
use SpApi\Model\easyship\v2022_03_23\UpdateScheduledPackagesRequest;

/**
 * UpdateScheduledPackagesRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for the &#x60;updateScheduledPackages&#x60; operation.
 * @package     SpApi
 */
class UpdateScheduledPackagesRequestTest extends TestCase
{

    private UpdateScheduledPackagesRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new UpdateScheduledPackagesRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "UpdateScheduledPackagesRequest"
     */
    public function testUpdateScheduledPackagesRequest()
    {
        $this->assertInstanceOf(UpdateScheduledPackagesRequest::class, $this->model);
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
     * Test attribute "update_package_details_list"
     */
    public function testPropertyUpdatePackageDetailsList()
    {
        $testValue = [];
        
        $this->model->setUpdatePackageDetailsList($testValue);
        $this->assertEquals($testValue, $this->model->getUpdatePackageDetailsList());
    }
}
