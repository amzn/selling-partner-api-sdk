<?php
/**
 * StandardTextBlockTest
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
use SpApi\Model\aplusContent\v2020_11_01\StandardTextBlock;

/**
 * StandardTextBlockTest Class Doc Comment
 *
 * @category    Class
 * @description The A+ Content standard text box block, which contains a paragraph and a headline.
 * @package     SpApi
 */
class StandardTextBlockTest extends TestCase
{

    private StandardTextBlock $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new StandardTextBlock();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "StandardTextBlock"
     */
    public function testStandardTextBlock()
    {
        $this->assertInstanceOf(StandardTextBlock::class, $this->model);
    }

    /**
     * Test attribute "headline"
     */
    public function testPropertyHeadline()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\TextComponent();
        
        $this->model->setHeadline($testValue);
        $this->assertEquals($testValue, $this->model->getHeadline());
    }

    /**
     * Test attribute "body"
     */
    public function testPropertyBody()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\ParagraphComponent();
        
        $this->model->setBody($testValue);
        $this->assertEquals($testValue, $this->model->getBody());
    }
}
