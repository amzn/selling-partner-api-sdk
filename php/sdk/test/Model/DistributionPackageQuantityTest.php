<?php
/**
 * DistributionPackageQuantityTest
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
use OpenAPI\Client\Model\awd\DistributionPackageQuantity;

/**
 * DistributionPackageQuantityTest Class Doc Comment
 *
 * @category    Class
 * @description Represents a distribution package with its respective quantity.
 * @package     OpenAPI\Client
 */
class DistributionPackageQuantityTest extends TestCase
{

    private DistributionPackageQuantity $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DistributionPackageQuantity();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DistributionPackageQuantity"
     */
    public function testDistributionPackageQuantity()
    {
        $this->assertInstanceOf(DistributionPackageQuantity::class, $this->model);
    }

    /**
     * Test attribute "count"
     */
    public function testPropertyCount()
    {
        $testValue = 123;
        
        $this->model->setCount($testValue);
        $this->assertEquals($testValue, $this->model->getCount());
    }

    /**
     * Test attribute "distribution_package"
     */
    public function testPropertyDistributionPackage()
    {
        
        $testValue = new \OpenAPI\Client\Model\awd\DistributionPackage();
        
        $this->model->setDistributionPackage($testValue);
        $this->assertEquals($testValue, $this->model->getDistributionPackage());
    }
}
