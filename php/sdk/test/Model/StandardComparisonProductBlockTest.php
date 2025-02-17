<?php
/**
 * StandardComparisonProductBlockTest
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
use SpApi\Model\aplusContent\v2020_11_01\StandardComparisonProductBlock;

/**
 * StandardComparisonProductBlockTest Class Doc Comment
 *
 * @category    Class
 * @description The A+ Content standard comparison product block.
 * @package     SpApi
 */
class StandardComparisonProductBlockTest extends TestCase
{

    private StandardComparisonProductBlock $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new StandardComparisonProductBlock();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "StandardComparisonProductBlock"
     */
    public function testStandardComparisonProductBlock()
    {
        $this->assertInstanceOf(StandardComparisonProductBlock::class, $this->model);
    }

    /**
     * Test attribute "position"
     */
    public function testPropertyPosition()
    {
        $testValue = 123;
        
        $this->model->setPosition($testValue);
        $this->assertEquals($testValue, $this->model->getPosition());
    }

    /**
     * Test attribute "image"
     */
    public function testPropertyImage()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\ImageComponent();
        
        $this->model->setImage($testValue);
        $this->assertEquals($testValue, $this->model->getImage());
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
     * Test attribute "asin"
     */
    public function testPropertyAsin()
    {
        $testValue = 'test';
        
        $this->model->setAsin($testValue);
        $this->assertEquals($testValue, $this->model->getAsin());
    }

    /**
     * Test attribute "highlight"
     */
    public function testPropertyHighlight()
    {
        $testValue = true;
        
        $this->model->setHighlight($testValue);
        $this->assertEquals($testValue, $this->model->getHighlight());
    }

    /**
     * Test attribute "metrics"
     */
    public function testPropertyMetrics()
    {
        $testValue = [];
        
        $this->model->setMetrics($testValue);
        $this->assertEquals($testValue, $this->model->getMetrics());
    }
}
