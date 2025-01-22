<?php
/**
 * StandardTextBlockTest
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
use OpenAPI\Client\Model\aplusContent\StandardTextBlock;

/**
 * StandardTextBlockTest Class Doc Comment
 *
 * @category    Class
 * @description The A+ Content standard text box block, comprised of a paragraph with a headline.
 * @package     OpenAPI\Client
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
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\TextComponent();
        
        $this->model->setHeadline($testValue);
        $this->assertEquals($testValue, $this->model->getHeadline());
    }

    /**
     * Test attribute "body"
     */
    public function testPropertyBody()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\ParagraphComponent();
        
        $this->model->setBody($testValue);
        $this->assertEquals($testValue, $this->model->getBody());
    }
}
