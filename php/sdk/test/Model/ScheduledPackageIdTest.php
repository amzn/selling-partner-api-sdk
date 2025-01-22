<?php
/**
 * ScheduledPackageIdTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\easyship\ScheduledPackageId;

/**
 * ScheduledPackageIdTest Class Doc Comment
 *
 * @category    Class
 * @description Identifies the scheduled package to be updated.
 * @package     OpenAPI\Client
 */
class ScheduledPackageIdTest extends TestCase
{

    private ScheduledPackageId $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ScheduledPackageId();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ScheduledPackageId"
     */
    public function testScheduledPackageId()
    {
        $this->assertInstanceOf(ScheduledPackageId::class, $this->model);
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
     * Test attribute "package_id"
     */
    public function testPropertyPackageId()
    {
        $testValue = 'test';
        
        $this->model->setPackageId($testValue);
        $this->assertEquals($testValue, $this->model->getPackageId());
    }
}
