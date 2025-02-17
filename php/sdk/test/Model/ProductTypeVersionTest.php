<?php
/**
 * ProductTypeVersionTest
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
use SpApi\Model\productTypeDefinitions\v2020_09_01\ProductTypeVersion;

/**
 * ProductTypeVersionTest Class Doc Comment
 *
 * @category    Class
 * @description The version details for an Amazon product type.
 * @package     SpApi
 */
class ProductTypeVersionTest extends TestCase
{

    private ProductTypeVersion $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ProductTypeVersion();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ProductTypeVersion"
     */
    public function testProductTypeVersion()
    {
        $this->assertInstanceOf(ProductTypeVersion::class, $this->model);
    }

    /**
     * Test attribute "version"
     */
    public function testPropertyVersion()
    {
        $testValue = 'test';
        
        $this->model->setVersion($testValue);
        $this->assertEquals($testValue, $this->model->getVersion());
    }

    /**
     * Test attribute "latest"
     */
    public function testPropertyLatest()
    {
        $testValue = true;
        
        $this->model->setLatest($testValue);
        $this->assertEquals($testValue, $this->model->getLatest());
    }

    /**
     * Test attribute "release_candidate"
     */
    public function testPropertyReleaseCandidate()
    {
        $testValue = true;
        
        $this->model->setReleaseCandidate($testValue);
        $this->assertEquals($testValue, $this->model->getReleaseCandidate());
    }
}
