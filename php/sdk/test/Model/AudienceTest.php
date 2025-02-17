<?php
/**
 * AudienceTest
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
use SpApi\Model\listings\items\v2021_08_01\Audience;

/**
 * AudienceTest Class Doc Comment
 *
 * @category    Class
 * @description Buyer segment or program this offer is applicable to.
 * @package     SpApi
 */
class AudienceTest extends TestCase
{

    private Audience $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Audience();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Audience"
     */
    public function testAudience()
    {
        $this->assertInstanceOf(Audience::class, $this->model);
    }

    /**
     * Test attribute "value"
     */
    public function testPropertyValue()
    {
        $testValue = 'test';
        
        $this->model->setValue($testValue);
        $this->assertEquals($testValue, $this->model->getValue());
    }

    /**
     * Test attribute "display_name"
     */
    public function testPropertyDisplayName()
    {
        $testValue = 'test';
        
        $this->model->setDisplayName($testValue);
        $this->assertEquals($testValue, $this->model->getDisplayName());
    }
}
