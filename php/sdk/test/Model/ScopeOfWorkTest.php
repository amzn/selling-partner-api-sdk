<?php
/**
 * ScopeOfWorkTest
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
use SpApi\Model\services\v1\ScopeOfWork;

/**
 * ScopeOfWorkTest Class Doc Comment
 *
 * @category    Class
 * @description The scope of work for the order.
 * @package     SpApi
 */
class ScopeOfWorkTest extends TestCase
{

    private ScopeOfWork $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ScopeOfWork();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ScopeOfWork"
     */
    public function testScopeOfWork()
    {
        $this->assertInstanceOf(ScopeOfWork::class, $this->model);
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
     * Test attribute "title"
     */
    public function testPropertyTitle()
    {
        $testValue = 'test';
        
        $this->model->setTitle($testValue);
        $this->assertEquals($testValue, $this->model->getTitle());
    }

    /**
     * Test attribute "quantity"
     */
    public function testPropertyQuantity()
    {
        $testValue = 123;
        
        $this->model->setQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getQuantity());
    }

    /**
     * Test attribute "required_skills"
     */
    public function testPropertyRequiredSkills()
    {
        $testValue = [];
        
        $this->model->setRequiredSkills($testValue);
        $this->assertEquals($testValue, $this->model->getRequiredSkills());
    }
}
