<?php
/**
 * DistributionPackageContentsTest
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
use OpenAPI\Client\Model\awd\DistributionPackageContents;

/**
 * DistributionPackageContentsTest Class Doc Comment
 *
 * @category    Class
 * @description Represents the contents inside a package, which can be products or a nested package.
 * @package     OpenAPI\Client
 */
class DistributionPackageContentsTest extends TestCase
{

    private DistributionPackageContents $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DistributionPackageContents();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DistributionPackageContents"
     */
    public function testDistributionPackageContents()
    {
        $this->assertInstanceOf(DistributionPackageContents::class, $this->model);
    }

    /**
     * Test attribute "packages"
     */
    public function testPropertyPackages()
    {
        $testValue = [];
        
        $this->model->setPackages($testValue);
        $this->assertEquals($testValue, $this->model->getPackages());
    }

    /**
     * Test attribute "products"
     */
    public function testPropertyProducts()
    {
        $testValue = [];
        
        $this->model->setProducts($testValue);
        $this->assertEquals($testValue, $this->model->getProducts());
    }
}
